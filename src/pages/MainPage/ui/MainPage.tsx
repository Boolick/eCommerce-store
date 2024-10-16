import React, {FC, useEffect} from 'react';
import {CompanySection} from 'widgets/CompanySection/CompanySection';
import {IntroSection} from 'widgets/IntroSection/IntroSection';
import {GridSection, GridSectionProps} from 'widgets/GridSection/GridSection';
import {useGetProductsQuery} from 'features/products/model/api/productsApi';
import {useDispatch, useSelector} from 'react-redux';
import {StateSchema} from 'shared/types/StateSchema';
import {useCheckCartExistsQuery, useCreateCartMutation} from 'features/cart/model/api/cartApi';
import {setCartId} from 'features/cart/model/slice/cartSlice';

const gridSection1Data: GridSectionProps[] = [
  {
    className: ['GridCell', 'doubleHeight', 'inverted'],
    imgSrc: 'https://dk-sport.ru/upload/iblock/e3c/301.jpg',
    title: 'Тренажер "Тяга Сверху / Верхняя тяга" А301F',
  },
];

const gridSection2Data: GridSectionProps[] = [
  {
    className: ['GridCell', 'doubleWidth', 'inverted'],
    imgSrc: 'https://dk-sport.ru/upload/iblock/521/6066.jpg',
    title: 'А605/1 Скамья регулируемая',
  },
];

const MainPage: FC = () => {
  const [gridSection1Products, setGridSection1Products] =
    React.useState<GridSectionProps[]>(gridSection1Data);
  const [gridSection2Products, setGridSection2Products] =
    React.useState<GridSectionProps[]>(gridSection2Data);

  const dispatch = useDispatch();
  const token = useSelector((state: StateSchema) => state.user.token);
  const cartId = useSelector((state: StateSchema) => state.cart.cartId);
  const [cartError, setCartError] = React.useState<string | null>(null);
  const {data: productsData} = useGetProductsQuery(undefined, {skip: !token});
  const [createCart] = useCreateCartMutation();
  const {data: cartExists, isLoading: cartExistsLoading} = useCheckCartExistsQuery(cartId ?? '', {
    skip: !cartId,
  });

  useEffect(() => {
    if (token && !cartId && !cartExistsLoading) {
      const createNewCart = async (): Promise<void> => {
        try {
          const newCart = await createCart({currency: 'EUR'}).unwrap();
          if (newCart && newCart.id) {
            dispatch(setCartId(newCart.id));
          }
        } catch (error) {
          setCartError(`Error creating cart. Please try again later.${error}`);
        }
      };
      createNewCart();
    }
  }, [token, cartId, cartExistsLoading, createCart, dispatch]);

  useEffect(() => {
    if (!token && cartId && cartExists === false) {
      dispatch(setCartId(null));
    }
  }, [cartExists, cartId, token, dispatch]);

  useEffect(() => {
    if (productsData) {
      const newGridSection1Products = productsData.slice(0, 10).map((product) => ({
        className: ['GridCell'],
        imgSrc: product.imgSrc,
        title: product.title,
      }));
      const newGridSection2Products = productsData.slice(10, 20).map((product) => ({
        className: ['GridCell'],
        imgSrc: product.imgSrc,
        title: product.title,
      }));
      setGridSection1Products(newGridSection1Products);
      setGridSection2Products(newGridSection2Products);
    }
  }, [productsData]);

  return (
    <>
      <IntroSection />
      <GridSection dataArray={gridSection1Products} sectionTitle={'Fenix Premium'} />
      <CompanySection />
      <GridSection
        dataArray={gridSection2Products}
        sectionTitle={'Rehabilitation training apparatus'}
      />
      {cartError && <p>{cartError}</p>}
    </>
  );
};

export default MainPage;
