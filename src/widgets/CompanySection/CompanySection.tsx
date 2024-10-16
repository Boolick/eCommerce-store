import {FC} from 'react';
import {CompanyCard} from 'shared/ui/CompanyCard/CompanyCard';
import {Section} from 'shared/ui/Section/Section';
import cls from './CompanySection.module.scss';

const CompanySection: FC = () => (
  <Section className={cls.Company}>
    <h2 className={cls.title}>Discounts</h2>
    <ul className={cls.list}>
      <CompanyCard
        imgSrc="https://dk-sport.ru/upload/iblock/c1e/dsc02815sm.jpg"
        title="Treadmill CardioPower T20 Plus Treadmill CardioPower T20 Plus"
        discountPrice="3 390 $"
        price="3 390 $"
      />
      <CompanyCard
        imgSrc="https://dk-sport.ru/upload/iblock/81f/PB241750x.jpg"
        title="Treadmill CardioPower T20 Plus"
        discountPrice="3 390 $"
        price="3 390 $"
      />
      <CompanyCard
        imgSrc="https://dk-sport.ru/upload/iblock/10a/31.jpg"
        title="Treadmill CardioPower T20 Plus"
        discountPrice="3 390 $"
        price="3 390 $"
      />
      <CompanyCard
        imgSrc="https://dk-sport.ru/upload/iblock/81f/PB241750x.jpg"
        title="Treadmill CardioPower T20 Plus"
        discountPrice="3 390 $"
        price="3 390 $"
      />
    </ul>
  </Section>
);

export {CompanySection};
