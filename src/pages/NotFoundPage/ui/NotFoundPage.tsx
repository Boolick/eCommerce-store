import {FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import Button from 'shared/ui/ButtonLink/Button';
import {Section} from 'shared/ui/Section/Section';
import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const navigateToMain = (): void => {
    navigate('/');
  };

  return (
    <Section className={classNames(styles.page_404)}>
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <div className={classNames(styles.four_zero_four_bg)}>
              <h2 className="text-center">404</h2>
            </div>
            <div className={classNames(styles.content_box_404)}>
              <h3 className="h2">Look like you&rsquo;re lost</h3>
              <p>
                The page{' '}
                <u className={classNames(styles['page-lost__color'])}>{location.pathname}</u> you
                are looking for not available!
              </p>
              <Button onClick={navigateToMain} className={classNames('to-main__button')}>
                Go Home Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export {NotFoundPage};
