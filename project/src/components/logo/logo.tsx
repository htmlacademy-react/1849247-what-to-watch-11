type LogoProps = {
  isOnMainPage: boolean;
  isInFooter: boolean;
};

function Logo({ isOnMainPage, isInFooter }: LogoProps): JSX.Element {
  const mainPagePath: string = isOnMainPage ? '' : 'main.html';
  const footerClass: string = isInFooter ? 'logo__link--light' : '';
  // console.log(mainPagePath);

  return (
    <div className='logo'>
      <a href={mainPagePath} className={`logo__link ${footerClass}`}>
        <span className='logo__letter logo__letter--1'>W</span>
        <span className='logo__letter logo__letter--2'>T</span>
        <span className='logo__letter logo__letter--3'>W</span>
      </a>
    </div>
  );
}

export default Logo;
