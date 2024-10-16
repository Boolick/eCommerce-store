import {FC} from 'react';
import classNames from 'classnames';
import {Section} from 'shared/ui/Section/Section';
import {AboutUs} from 'widgets/AboutUsSection/AboutUs';
import rsLogo from 'shared/assets/img/rsLogo.png';
import styles from './AboutUsPage.module.scss';

const AboutUsPage: FC = () => {
  return (
    <Section className={classNames(styles['team-wrapper'])}>
      <div className="team">
        <AboutUs />
        <div className={classNames(styles.rsLogo)}>
          <a href="https://rs.school/" target="_blank" rel="noopener noreferrer">
            <img src={rsLogo} alt="RSLogo" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export {AboutUsPage};
