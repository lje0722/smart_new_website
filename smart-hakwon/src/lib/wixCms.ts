import type { ScheduleBand, ScheduleColumn } from '../content/timetables';

/**
 * Reads Wix CMS collections as an anonymous site visitor (Wix Headless REST).
 * Docs: https://dev.wix.com/docs/go-headless/authentication/visitors/authenticate-visitors-rest
 *       https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/query-data-items
 *
 * The client ID is a public OAuth client ID (no secret), safe to ship in the browser.
 * It belongs to the Wix site that holds the "Timetable" collection.
 */
const WIX_CLIENT_ID = '9b823984-ca85-419d-8e02-386f921b1262';

let tokenPromise: Promise<string> | null = null;

function visitorToken(): Promise<string> {
  tokenPromise ??= fetch('https://www.wixapis.com/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId: WIX_CLIENT_ID, grantType: 'anonymous' }),
  })
    .then((r) => {
      if (!r.ok) throw new Error(`Wix token request failed (${r.status})`);
      return r.json();
    })
    .then((j: { access_token: string }) => j.access_token)
    .catch((e) => {
      tokenPromise = null;
      throw e;
    });
  return tokenPromise;
}

export async function queryCollection<T>(collectionId: string, sortField: string): Promise<T[]> {
  const token = await visitorToken();
  const r = await fetch('https://www.wixapis.com/wix-data/v2/items/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    body: JSON.stringify({
      dataCollectionId: collectionId,
      query: { sort: [{ fieldName: sortField, order: 'ASC' }], paging: { limit: 1000 } },
    }),
  });
  if (!r.ok) throw new Error(`Wix CMS query failed (${r.status})`);
  const j: { dataItems?: { data: T }[] } = await r.json();
  return (j.dataItems ?? []).map((i) => i.data);
}

/** One row of the "Timetable" CMS collection. */
export interface TimetableRow {
  band: string;
  bandLabel: string;
  bandOrder: number;
  sortOrder: number;
  course: string;
  grade: string;
  classGroup: string;
  day: string;
  time: string;
  tutor: string;
}

/** Groups CMS rows into the grade-band tabs the existing <GradeTabs> renders. */
export function rowsToBands(rows: TimetableRow[], columns: ScheduleColumn[]): ScheduleBand[] {
  const bands = new Map<string, ScheduleBand & { order: number }>();
  for (const r of rows) {
    let b = bands.get(r.band);
    if (!b) {
      b = { id: r.band, label: r.bandLabel, columns, rows: [], order: r.bandOrder };
      bands.set(r.band, b);
    }
    b.rows.push({ c1: r.course, gr: r.grade, cl: r.classGroup, dy: r.day, tm: r.time, tut: r.tutor });
  }
  return [...bands.values()].sort((a, b) => a.order - b.order).map(({ order: _order, ...band }) => band);
}
