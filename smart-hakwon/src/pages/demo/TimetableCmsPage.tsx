import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { GradeTabs } from '../../components/GradeTabs';
import { timetableTimetableEn, type ScheduleBand } from '../../content/timetables';
import { queryCollection, rowsToBands, type TimetableRow } from '../../lib/wixCms';

/**
 * DEMO — same Timetable UI, but the rows come live from the Wix CMS collection
 * "Timetable" instead of src/content/timetables.ts. Not linked from the menu.
 */
export default function TimetableCmsPage() {
  const [bands, setBands] = useState<ScheduleBand[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    queryCollection<TimetableRow>('Timetable', 'sortOrder')
      .then((rows) => setBands(rowsToBands(rows, timetableTimetableEn[0].columns)))
      .catch((e: Error) => setError(e.message));
  }, []);

  return (
    <Layout locale="en" page="timetable" title="Timetable (Wix CMS demo) — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Timetable</b></Link>
        <h1>Regular timetable · Aug – Dec 2026</h1>
        <p>Demo: these rows are loaded live from the Wix CMS collection “Timetable”.</p>
      </section>
      <section className="section tint" id="timetable">
        <div className="wrap">
          {error && <p role="alert">Could not load the timetable from Wix: {error}</p>}
          {!error && !bands && <p>Loading timetable from Wix CMS…</p>}
          {bands && <GradeTabs ariaLabel="Grade band" bands={bands} />}
        </div>
      </section>
    </Layout>
  );
}
