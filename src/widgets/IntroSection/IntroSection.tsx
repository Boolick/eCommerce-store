import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Section} from 'shared/ui/Section/Section';
import bgImg from 'shared/assets/img/intro.jpg';
import cls from './IntroSection.module.scss';

const FullBgImg = (): JSX.Element => {
  return <img src={bgImg} width="1500" height="1000" alt="" aria-hidden="true" />;
};

const IntroSection: FC = () => {
  const navigate = useNavigate();
  return (
    <Section fullBgImg={<FullBgImg />} className={cls.Intro}>
      <h2 className="visually-hidden">The most popular product</h2>
      <div className={cls.IntroContent}></div>
      <button onClick={() => navigate('/catalog')} className={cls.IntroBtn}>
        Go to catalog
      </button>
    </Section>
  );
};

export {IntroSection};
