import {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {StateSchema} from 'shared/types/StateSchema';
import {Section} from 'shared/ui/Section/Section';
import {CartElement, CartElementProps} from 'shared/ui/CartElement/CartElement';
import {CartTotals} from 'shared/ui/CartTotals/CartTotals';
import {Loader} from 'shared/ui/Loader/Loader';
import Button from 'shared/ui/ButtonSubmit/Button';
import {useGetCartQuery} from '../../features/cart/model/api/cartApi';
import cls from './CartSection.module.scss';

const CartSection: FC = () => {
  const token = useSelector((state: StateSchema) => state.user.token);
  const navigate = useNavigate();
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (token) {
      setShouldFetch(true);
    }
  }, [token]);

  const {data, error, isLoading, refetch} = useGetCartQuery(undefined, {
    skip: !shouldFetch,
  });

  useEffect(() => {
    if (token && shouldFetch) {
      refetch();
    }
  }, [token, shouldFetch, refetch]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.toString()}</div>;

  if (!data || data.results.length === 0) {
    return (
      <Section className={cls.Cart}>
        <h2 className={cls.title}>My cart</h2>
        <p>Your cart is empty</p>
        <Button onClick={() => navigate('/catalog')}>Return to catalog</Button>
      </Section>
    );
  }

  const cartItems: CartElementProps[] = data.results[0].lineItems.map((item) => ({
    id: item.id,
    imgSrc: item.variant.images[0]?.url || '',
    title: item.name['en-US'],
    finalPrice: item.totalPrice.centAmount / 100,
    discountPrice: `${item.totalPrice.centAmount / 100} ${item.totalPrice.currencyCode}`,
    fullPrice: item.price.value.centAmount / 100,
    price: `${item.price.value.centAmount / 100} ${item.price.value.currencyCode}`,
    quantity: item.quantity,
  }));

  const totalFinalPrice = cartItems.reduce((acc, item) => acc + item.finalPrice, 0);
  const totalFullPrice = cartItems.reduce((acc, item) => acc + item.fullPrice, 0);

  return (
    <Section className={cls.Cart}>
      <h2 className={cls.title}>My cart</h2>
      <div className={cls.cartWrapper}>
        <div className={cls.cartProducts}>
          {cartItems.map((item) => (
            <CartElement key={item.id} {...item} />
          ))}
        </div>
        <div className={cls.totals}>
          <CartTotals sum={totalFinalPrice} full={totalFullPrice} />
        </div>
      </div>
    </Section>
  );
};

export {CartSection};
