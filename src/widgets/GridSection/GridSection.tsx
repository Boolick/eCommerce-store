import {FC} from 'react';
import {Section} from 'shared/ui/Section/Section';
import {GridCell} from 'shared/ui/GridCell/GridCell';
import cls from './GridSection.module.scss';

export interface GridSectionProps {
  className: string[];
  imgSrc: string;
  title: string;
}

interface GridSectionPropsArray {
  dataArray: GridSectionProps[];
  sectionTitle: string;
}

const GridSection: FC<GridSectionPropsArray> = ({dataArray, sectionTitle}) => (
  <Section className={cls.Grid}>
    <h2 className={cls.title}>{sectionTitle}</h2>
    <ul className={cls.GridList}>
      {dataArray.map((item: GridSectionProps) => (
        <GridCell
          key={item.title}
          className={item.className}
          imgSrc={item.imgSrc}
          title={item.title}
        />
      ))}
    </ul>
  </Section>
);

export {GridSection};
