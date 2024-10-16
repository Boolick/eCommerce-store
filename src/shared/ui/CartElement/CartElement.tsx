import {FC} from 'react';
import IconRemove from 'shared/assets/icons/icon-remove.svg';
import cls from './CartElement.module.scss';

export interface CartElementProps {
  id: string;
  imgSrc: string;
  title: string;
  finalPrice: number;
  discountPrice?: string;
  fullPrice: number;
  price: string;
  quantity?: number;
}

const CartElement: FC<CartElementProps> = (props) => {
  const {imgSrc, title, discountPrice, price, quantity = 1} = props;

  return (
    <div className={cls.CartElement}>
      <div className={cls.elemWrapper}>
        <div className={cls.img}>
          <img src={imgSrc} width="160" height="160" alt="" />
        </div>
        <p className={cls.title}>{title}</p>
        <div className={cls.counter}>
          <button
            className={cls.counterBtn}
            type="button"
            aria-label="decrease quantity"
            disabled={quantity === 0 ? true : undefined}
          >
            -
          </button>
          <span>{quantity}</span>
          <button className={cls.counterBtn} type="button" aria-label="increase quantity">
            +
          </button>
        </div>
        <div className={cls.prices}>
          {discountPrice && <span className={cls.discountPrice}>{discountPrice}</span>}
          <span className={cls.price}>{price}</span>
        </div>
        <div className={cls.delete}>
          <button className={cls.btn} type="button">
            <IconRemove />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export {CartElement};
