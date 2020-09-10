import classNames from "@sindresorhus/class-names";

const BASE = "shadow-md rounded w-full h-24 mb-2";

export const Sample: React.FC<{
  className: string;
  label?: string;
}> = props => {
  return (
    <div className="">
      <div className={classNames(BASE, props.className)} role="img"></div>
      {props.label ? (
        <h4 className="font-mono text-xs font-bold tracking-widest uppercase opacity-50">
          {props.label}
        </h4>
      ) : null}
    </div>
  );
};
