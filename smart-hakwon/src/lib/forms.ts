export type FormName = 'contact' | 'careers';

/**
 * Form submission hook.
 *
 * The original design did not include a backend, so this preview build only
 * logs the submitted values. To go live, replace the body with one of:
 *  - a Wix Forms / Wix CMS (Data) insert via the Wix SDK or REST API,
 *  - a POST to your own endpoint or an email service (Formspree, etc.).
 * Field names come from each input's `name` attribute (same as its `id`).
 */
export async function submitForm(form: FormName, data: FormData): Promise<void> {
  const values: Record<string, string> = {};
  data.forEach((value, key) => {
    values[key] = value instanceof File ? value.name : String(value);
  });
  console.info(`[preview] ${form} form submitted`, values);
}
