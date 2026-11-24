import { useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { submitForm, type FormName } from '../lib/forms';
import { ui, type Locale } from '../content/site';

interface DemoFormProps {
  name: FormName;
  locale: Locale;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Wraps the enquiry / job-application forms. The design had no backend, so
 * submission goes through `submitForm` in src/lib/forms.ts — replace that one
 * function to connect Wix Forms, a Wix CMS collection, or an email service.
 */
export function DemoForm({ name, locale, className, style, children }: DemoFormProps) {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm(name, new FormData(e.currentTarget));
    setSent(true);
  };

  return (
    <form className={className} style={style} onSubmit={onSubmit}>
      {children}
      {sent && (
        <p className="form-status" role="status">
          {ui[locale].formNotice}
        </p>
      )}
    </form>
  );
}
