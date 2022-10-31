import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Page404(): JSX.Element {
  return (
    <div className='user-page'>
      <Header isOnMainPage={false} specifyingСlass='user-page__head'>
        <h1 className='page-title user-page__title'>Sign in</h1>
      </Header>

      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        {/* TODO: доработать стили, поправить классы */}
        <h2 style={{ fontSize: '120px' }}>404</h2>
        <p style={{ fontSize: '20px' }}>Not Found</p>
        <a style={{ fontSize: '20px', color: 'inherit' }} href='main.html'>
          Back to main page
        </a>
      </div>

      <Footer isOnMainPage={false} />
    </div>
  );
}

export default Page404;
