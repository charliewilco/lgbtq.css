export const Sample: React.FC<{
  className: string;
  label?: string;
}> = (props) => {
  return (
    <figure>
      <div className={props.className} role="img" />
      {props.label ? <figcaption>{props.label}</figcaption> : null}
      <style jsx>{`
        [role="img"] {
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%),
            0 2px 4px -1px rgb(0 0 0 / 6%);
          width: 100%;
          height: 6rem;
          border-radius: 0.25rem;
        }

        figure {
          margin: 0;
        }

        figcaption {
          text-align: center;
          padding-top: 0.25rem;
          font-family: var(--monospace);
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.75;
          font-size: 0.75rem;
        }
      `}</style>
    </figure>
  );
};
