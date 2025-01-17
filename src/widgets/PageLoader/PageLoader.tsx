import {FC} from 'react';
import classNames from 'classnames';
import {Loader} from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC = ({className}: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, className)}>
    <Loader />
  </div>
);
