import { useEffect, useId, useRef, useState } from 'react';
import './Plate.css';

type PlateProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  /** Aspect ratio for the inline frame, e.g. '4 / 3' */
  ratio?: string;
  loading?: 'lazy' | 'eager';
};

/**
 * A figure that can be opened larger. The school's artwork is dense —
 * charts, plans, notebook pages — so being able to lean in matters.
 */
export function Plate({
  src,
  alt,
  width,
  height,
  caption,
  className,
  ratio = '4 / 3',
  loading = 'lazy',
}: PlateProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const captionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('dialog-open');
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const onDialogClose = () => {
    document.documentElement.classList.remove('dialog-open');
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <figure className={`plate ${className ?? ''}`.trim()}>
      <button
        type="button"
        ref={triggerRef}
        className="plate__trigger"
        onClick={() => setOpen(true)}
        aria-label={`Look closer: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          style={{ aspectRatio: ratio }}
        />
        <span className="plate__hint" aria-hidden="true">
          Look closer
        </span>
      </button>

      {caption ? <figcaption className="plate__caption">{caption}</figcaption> : null}

      <dialog
        ref={dialogRef}
        className="plate__dialog"
        aria-label={`${alt} — enlarged`}
        aria-describedby={caption ? captionId : undefined}
        onClose={onDialogClose}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="plate__viewer">
          <button type="button" className="plate__close" onClick={() => setOpen(false)}>
            Close
          </button>
          <img className="plate__full" src={src} alt={alt} width={width} height={height} />
          {caption ? (
            <p className="plate__dialog-caption" id={captionId}>
              {caption}
            </p>
          ) : null}
        </div>
      </dialog>
    </figure>
  );
}
