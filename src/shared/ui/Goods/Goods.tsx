import {FC} from 'react';
import classNames from 'classnames';
import cls from './Goods.module.scss';
import {CatalogCard} from '../CatalogCard/CatalogCard';

export interface GoodsProps {
  id: string;
  imgSrc: string;
  title: string;
  price: string;
}

interface GoodsPropsArray {
  dataArray: GoodsProps[];
  className?: string;
}

const Goods: FC<GoodsPropsArray> = ({dataArray, className}) => {
  return (
    <div className={classNames(cls.Goods, className)}>
      {dataArray.map((item) => (
        <CatalogCard
          key={item.id}
          id={item.id}
          imgSrc={item.imgSrc}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export {Goods};
