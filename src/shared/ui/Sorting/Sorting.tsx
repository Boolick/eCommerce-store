import {FC, useState} from 'react';
import classNames from 'classnames';
import IconSort from 'shared/assets/icons/icon-sort.svg';
import cls from './Sorting.module.scss';

interface SortingProps {
  className?: string;
}

const sortButtons = [
  {
    id: 0,
    title: 'By name',
  },
  {
    id: 1,
    title: 'By price',
  },
];

enum SortingOrder {
  ASC = 0,
  DESC = 1,
}

const Sorting: FC<SortingProps> = ({className}) => {
  const [activeSorting, setActiveSorting] = useState(0);
  const [order, setOrder] = useState<SortingOrder>(SortingOrder.ASC);

  const btnClickHandler = (id: number): void => {
    if (id === activeSorting) {
      setOrder((prev) => Number(!prev));
    } else {
      setActiveSorting(id);
    }
  };

  return (
    <div className={classNames(cls.Sorting, className)}>
      {sortButtons.map((btn) => {
        const classes = [cls.SortingBtn];
        if (btn.id === activeSorting) classes.push(cls.active);
        if (order) classes.push(cls.desc);
        return (
          <button
            key={btn.id}
            className={classNames(classes)}
            onClick={() => btnClickHandler(btn.id)}
          >
            {btn.id === activeSorting && (
              <span className={cls.icon}>
                <IconSort />
              </span>
            )}
            <span className={cls.name}>{btn.title}</span>
          </button>
        );
      })}
    </div>
  );
};

export {Sorting};
