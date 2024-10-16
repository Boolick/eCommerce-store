import {FC} from 'react';
import classNames from 'classnames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC = ({className}: LoaderProps) => (
  <div className={classNames('loadingio-spinner-spin-2by998twmg9', className)}>
    <div className="ldio-yzaezf3dcml">
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
);
