import {FC} from 'react';
import IconBag from 'shared/assets/icons/icon-bag.svg';
import cls from './CatalogCard.module.scss';

interface CatalogCardProps {
  id: string;
  imgSrc: string;
  title: string;
  area?: string;
  discountPrice?: string;
  price: string;
}

const CatalogCard: FC<CatalogCardProps> = (props) => {
  const {imgSrc, title, discountPrice, price, area} = props;

  return (
    <div className={cls.CatalogCard}>
      <div className={cls.img}>
        <img src={imgSrc} width="300" height="300" alt="" />
      </div>
      <p className={cls.cardTitle}>{title}</p>
      <p className={cls.cardArea}>Area: {area}</p>
      <div className={cls.footer}>
        <div className={cls.prices}>
          <span className={cls.price}>{price}</span>
          {discountPrice && <span className={cls.discountPrice}>{discountPrice}</span>}
        </div>
        <button className={cls.btn} type="button">
          <IconBag />
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
};

export {CatalogCard};
