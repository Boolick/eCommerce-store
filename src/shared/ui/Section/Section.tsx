import classNames from 'classnames';
import {FC, ReactNode} from 'react';

interface SectionProps {
  className?: string;
  children?: ReactNode;
  fullBgImg?: JSX.Element;
}

const Section: FC<SectionProps> = (props) => {
  const {className, children, fullBgImg} = props;

  return (
    <section className={classNames(className)}>
      {fullBgImg}
      <div className="container">{children}</div>
    </section>
  );
};

export {Section};
