import type { ScheduleBand } from '../content/timetables';

interface ScheduleTableProps {
  band: ScheduleBand;
  id?: string;
  labelledBy?: string;
}

/**
 * One timetable panel. Rows are CSS-grid rows (see `.table` / `.tr` in global.css);
 * on phones the header row hides and each row becomes a small card.
 */
export function ScheduleTable({ band, id, labelledBy }: ScheduleTableProps) {
  const rowStyle = band.gridTemplateColumns
    ? { gridTemplateColumns: band.gridTemplateColumns }
    : undefined;

  return (
    <div className="table" role="tabpanel" id={id} aria-labelledby={labelledBy}>
      <div className="tr th" role="row" style={rowStyle}>
        {band.columns.map((col) => (
          <span key={col.key}>{col.label}</span>
        ))}
      </div>
      {band.rows.map((row, r) => (
        <div className="tr" role="row" style={rowStyle} key={r}>
          {band.columns.map((col) => (
            <span className={col.key} key={col.key}>
              {row[col.key]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
