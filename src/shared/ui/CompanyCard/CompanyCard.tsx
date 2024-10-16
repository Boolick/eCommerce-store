import {FC} from 'react';
import IconBag from 'shared/assets/icons/icon-bag.svg';
import cls from './CompanyCard.module.scss';

interface CompanyCardProps {
  imgSrc: string;
  title: string;
  discountPrice: string;
  price: string;
}

const CompanyCard: FC<CompanyCardProps> = (props) => {
  const {imgSrc, title, discountPrice, price} = props;

  return (
    <li className={cls.CompanyCard}>
      <div className={cls.img}>
        <img src={imgSrc} width="300" height="300" alt="" />
      </div>
      <p className={cls.cardTitle}>{title}</p>
      <div className={cls.description}>
        <span className={cls.discountPrice}>{discountPrice}</span>
        <span className={cls.price}>{price}</span>
        <button className={cls.btn} type="button">
          <IconBag />
          <span>Buy</span>
        </button>
      </div>
    </li>
  );
};

export {CompanyCard};
