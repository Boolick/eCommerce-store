import {FC} from 'react';
import classNames from 'classnames';
import cls from './GridCell.module.scss';

interface GridCellProps {
  imgSrc: string;
  title: string;
  className: string[];
}

const GridCell: FC<GridCellProps> = (props) => {
  const {imgSrc, title, className} = props;

  return (
    <li className={classNames(className.map((item) => cls[item]))}>
      <div className={cls.img}>
        <img src={imgSrc} width="100" height="200" alt="" />
      </div>
      <div className={cls.overlay}></div>
      <p className={cls.itemTitle}>{title}</p>
    </li>
  );
};

export {GridCell};
