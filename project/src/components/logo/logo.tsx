import { Link, useLocation } from 'react-router-dom';

import { AppRoute } from '../../const';

type LogoProps = {
  isFilled: boolean;
};

function Logo({ isFilled }: LogoProps): JSX.Element {
  const footerClass: string = isFilled ? 'logo__link--light' : '';
  const { pathname } = useLocation();

  const logoLettersBlock = (
    <>
      <span className='logo__letter logo__letter--1'>W</span>
      <span className='logo__letter logo__letter--2'>T</span>
      <span className='logo__letter logo__letter--3'>W</span>
    </>
  );

  const renderLogo = () => {
    if (pathname === AppRoute.Main) {
      return <div className={`logo__link ${footerClass}`}>{logoLettersBlock}</div>;
    }

    return (
      <Link to={AppRoute.Main} className={`logo__link ${footerClass}`}>
        {logoLettersBlock}
      </Link>
    );
  };

  return (
    <div className='logo'>
      {renderLogo()}
    </div>
  );
}

export default Logo;
