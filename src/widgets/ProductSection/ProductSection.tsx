import {FC} from 'react';
import {Section} from 'shared/ui/Section/Section';
import IconBag from 'shared/assets/icons/icon-bag.svg';
import cls from './ProductSection.module.scss';

interface ProductSectionProps {
  id: string;
  title: string;
  imgSrc?: string[];
  price?: string;
  discountPrice?: string;
  area?: string;
  category?: string;
  description?: string;
}

const productData: ProductSectionProps = {
  id: 'ARTICUL',
  imgSrc: ['https://dk-sport.ru/upload/iblock/e3c/301.jpg'],
  title: 'Тренажер "Тяга Сверху / Верхняя тяга" А301F',
  price: '11230 $',
  discountPrice: '11100 $',
  area: 'arms',
  category: 'Fenix Premium',
  description: 'Just another trainer',
};

const ProductSection: FC = () => {
  // данные надо брать из стора, это просто моковые данные
  return (
    <Section className={cls.Product}>
      <h2 className={cls.title} id="id-product">
        {productData.title}
      </h2>
      <div className={cls.wrapper}>
        <div className={cls.img}>
          <img
            src={productData.imgSrc?.[0]}
            width="500"
            height="500"
            alt=""
            aria-labelledby="id-product"
          />
        </div>
        <div className={cls.info}>
          <div className={cls.params}>
            <div className={cls.prices}>
              <span className={cls.price}>{productData.price}</span>
              {productData.discountPrice && (
                <span className={cls.discountPrice}>{productData.discountPrice}</span>
              )}
            </div>
            <button className={cls.btn} type="button">
              <IconBag />
              <span>Buy</span>
            </button>
          </div>
          <ul className={cls.options}>
            <li className={cls.optionsItem}>
              Area: <span>{productData.area}</span>
            </li>
            <li className={cls.optionsItem}>
              Category: <span>{productData.category}</span>
            </li>
          </ul>
          <div className={cls.description}>{productData.description}</div>
        </div>
      </div>
    </Section>
  );
};

export {ProductSection};
