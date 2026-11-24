import { useId, useState } from 'react';
import { ScheduleTable } from './ScheduleTable';
import type { ScheduleBand } from '../content/timetables';

interface GradeTabsProps {
  /** Accessible name of the tab list, e.g. "Grade band". */
  ariaLabel: string;
  bands: ScheduleBand[];
}

/**
 * Grade-band switcher used on the Timetable and Intensive Class pages.
 * Buttons select which band's table is shown (same behaviour as the design's tabs).
 * Supports arrow-key navigation between tabs.
 */
export function GradeTabs({ ariaLabel, bands }: GradeTabsProps) {
  const [active, setActive] = useState(bands[0]?.id ?? '');
  const baseId = useId();

  const focusTab = (index: number) => {
    const next = bands[(index + bands.length) % bands.length];
    setActive(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  };

  return (
    <>
      <div className="tabs" role="tablist" aria-label={ariaLabel}>
        {bands.map((band, i) => (
          <button
            key={band.id}
            id={`${baseId}-tab-${band.id}`}
            type="button"
            className="tab"
            role="tab"
            aria-selected={active === band.id}
            aria-controls={`${baseId}-panel-${band.id}`}
            tabIndex={active === band.id ? 0 : -1}
            onClick={() => setActive(band.id)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') focusTab(i + 1);
              if (e.key === 'ArrowLeft') focusTab(i - 1);
            }}
          >
            {band.label}
          </button>
        ))}
      </div>
      {bands.map((band) =>
        band.id === active ? (
          <ScheduleTable
            key={band.id}
            id={`${baseId}-panel-${band.id}`}
            labelledBy={`${baseId}-tab-${band.id}`}
            band={band}
          />
        ) : null,
      )}
    </>
  );
}
