import {FC} from 'react';
import cls from './CartTotals.module.scss';

interface CartTotalsProps {
  sum: number;
  full: number;
}

const CartTotals: FC<CartTotalsProps> = ({sum, full}) => {
  return (
    <div className={cls.CartTotals}>
      <div>
        <p>Price with discount: {`${sum} $`}</p>
        <p>Full price: {`${full} $`}</p>
      </div>

      <button className={cls.btn} type="button">
        <span>Pay</span>
      </button>
    </div>
  );
};

export {CartTotals};
