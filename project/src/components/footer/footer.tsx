import Logo from '../logo/logo';

type FooterProps = {
  isOnMainPage: boolean;
};

function Footer({ isOnMainPage }: FooterProps): JSX.Element {
  return (
    <footer className='page-footer'>
      <Logo isOnMainPage={isOnMainPage} isInFooter />

      <div className='copyright'>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
