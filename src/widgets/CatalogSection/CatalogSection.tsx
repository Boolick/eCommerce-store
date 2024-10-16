import {FC, useEffect, useState} from 'react';
import {Section} from 'shared/ui/Section/Section';
import {Sorting} from 'shared/ui/Sorting/Sorting';
import {Filter} from 'shared/ui/Filter/Filter';
import {Goods} from 'shared/ui/Goods/Goods';
import {useGetProductsQuery} from 'features/products/model/api/productsApi';
import {useSelector} from 'react-redux';
import {StateSchema} from 'shared/types/StateSchema';
import {Loader} from 'shared/ui/Loader/Loader';
import cls from './CatalogSection.module.scss';

const CatalogSection: FC = () => {
  const token = useSelector((state: StateSchema) => state.user.token);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (token) {
      setShouldFetch(true);
    }
  }, [token]);
  const {
    data: products = [],
    error,
    isLoading,
  } = useGetProductsQuery(undefined, {skip: !shouldFetch});

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  const catalogData = products;

  return (
    <Section className={cls.Catalog}>
      <h2 className={cls.title}>Catalog</h2>
      <div className={cls.catalogWrapper}>
        <Filter className={cls.CatalogFilterItem} />
        <Sorting className={cls.CatalogSortingItem} />
        {/* Передаем catalogData в качестве dataArray в компонент Goods */}
        <Goods className={cls.CatalogGoodsItem} dataArray={catalogData} />
      </div>
    </Section>
  );
};

export {CatalogSection};
