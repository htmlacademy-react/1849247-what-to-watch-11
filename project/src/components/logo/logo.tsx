import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isOnMainPage: boolean;
  isInFooter: boolean;
};

function Logo({ isOnMainPage, isInFooter }: LogoProps): JSX.Element {
  const mainPagePath: string = isOnMainPage ? '#' : AppRoute.Main;
  const footerClass: string = isInFooter ? 'logo__link--light' : '';

  return (
    <div className='logo'>
      <Link to={mainPagePath} className={`logo__link ${footerClass}`}>
        <span className='logo__letter logo__letter--1'>W</span>
        <span className='logo__letter logo__letter--2'>T</span>
        <span className='logo__letter logo__letter--3'>W</span>
      </Link>
    </div>
  );
}

export default Logo;
