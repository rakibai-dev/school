import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { school } from '../data/school';
import {
  classOptions,
  formatLongDate,
  nextVisitingDay,
  toInputValue,
  validateVisit,
  type VisitErrors,
  type VisitFields,
} from '../lib/visits';
import './VisitDialog.css';

type VisitDialogProps = {
  open: boolean;
  onClose: () => void;
};

const blankFields = (): VisitFields => ({
  name: '',
  email: '',
  childClass: '',
  date: toInputValue(nextVisitingDay()),
  notes: '',
});

export function VisitDialog({ open, onClose }: VisitDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleId = useId();
  const [fields, setFields] = useState<VisitFields>(blankFields);
  const [errors, setErrors] = useState<VisitErrors>({});
  const [submitted, setSubmitted] = useState<VisitFields | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('dialog-open');
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      setErrors({});
      setFields(blankFields());
      setSubmitted(null);
    }
  }, [open]);

  const requestClose = () => {
    dialogRef.current?.close();
  };

  const handleDialogClose = () => {
    document.documentElement.classList.remove('dialog-open');
    onClose();
  };

  const update = (key: keyof VisitFields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateVisit(fields);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const element = formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`);
      element?.focus();
      return;
    }

    setSubmitted(fields);
  };

  return (
    <dialog
      ref={dialogRef}
      className="visit"
      aria-labelledby={titleId}
      onClose={handleDialogClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) requestClose();
      }}
    >
      <div className="visit__panel">
        <button type="button" className="visit__close" onClick={requestClose}>
          Close
        </button>

        {submitted ? (
          <div className="visit__done">
            <p className="visit__kicker">Visit requested</p>
            <h2 className="visit__title" id={titleId}>
              We will see you on {formatLongDate(submitted.date)}.
            </h2>
            <p>
              The morning runs from 8:30 to 10:30, starting at the net loft at{' '}
              {school.address.street}. We will email {submitted.email} within two working days to
              confirm. Bring boots if the forecast is wet — we usually end up on the flats.
            </p>
            <p className="visit__small">
              Need to change the date? Call the office on{' '}
              <a className="text-link" href={school.phoneHref}>
                {school.phone}
              </a>
              .
            </p>
            <button type="button" className="btn btn--solid" onClick={requestClose}>
              Back to the site
            </button>
          </div>
        ) : (
          <>
            <p className="visit__kicker">Visiting mornings</p>
            <h2 className="visit__title" id={titleId}>
              Come and see a normal Tuesday.
            </h2>
            <p className="visit__intro">
              Two hours, an ordinary class, and a walk down to the water with the head of school.
              Mornings run on Tuesdays and Thursdays, 8:30 to 10:30.
            </p>

            <form ref={formRef} className="visit__form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label className="field__label" htmlFor="visit-name">
                  Your name
                </label>
                <input
                  id="visit-name"
                  name="name"
                  className="field__input"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(event) => update('name')(event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  required
                />
                {errors.name ? (
                  <p className="field__error" id="error-name">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="visit-email">
                  Email
                </label>
                <input
                  id="visit-email"
                  name="email"
                  className="field__input"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(event) => update('email')(event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  required
                />
                {errors.email ? (
                  <p className="field__error" id="error-email">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="visit-class">
                  Class your child would join
                </label>
                <select
                  id="visit-class"
                  name="childClass"
                  className="field__input field__input--select"
                  value={fields.childClass}
                  onChange={(event) => update('childClass')(event.target.value)}
                  aria-invalid={Boolean(errors.childClass)}
                  aria-describedby={errors.childClass ? 'error-class' : undefined}
                  required
                >
                  <option value="">Choose a class</option>
                  {classOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.childClass ? (
                  <p className="field__error" id="error-class">
                    {errors.childClass}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="visit-date">
                  Preferred morning
                </label>
                <input
                  id="visit-date"
                  name="date"
                  className="field__input"
                  type="date"
                  value={fields.date}
                  min={toInputValue(new Date())}
                  onChange={(event) => update('date')(event.target.value)}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'error-date' : undefined}
                  required
                />
                {errors.date ? (
                  <p className="field__error" id="error-date">
                    {errors.date}
                  </p>
                ) : (
                  <p className="field__hint">Tuesdays and Thursdays only.</p>
                )}
              </div>

              <div className="field">
                <label className="field__label" htmlFor="visit-notes">
                  Anything we should know? <span className="field__optional">Optional</span>
                </label>
                <textarea
                  id="visit-notes"
                  name="notes"
                  className="field__input field__input--area"
                  rows={3}
                  value={fields.notes}
                  onChange={(event) => update('notes')(event.target.value)}
                />
              </div>

              <div className="visit__actions">
                <button type="submit" className="btn btn--solid">
                  Request a visit
                </button>
                <p className="visit__small">
                  Or call the office on{' '}
                  <a className="text-link" href={school.phoneHref}>
                    {school.phone}
                  </a>
                  .
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
