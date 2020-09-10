import classNames from "@sindresorhus/class-names";

export const ContentTitle: React.FC = props => {
  return <h2 className="mb-8 text-3xl font-bold">{props.children}</h2>;
};

export const ContentArea: React.FC<{ className?: string }> = props => {
  const cx = classNames("", props.className);
  return <section className={cx}>{props.children}</section>;
};
