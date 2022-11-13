import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className='user-page'>
      <Header specifyingСlass='user-page__head'>
        <h1 className='page-title user-page__title'>Sign in</h1>
      </Header>

      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        {/* МНЕ: доработать стили, поправить классы */}
        <h2 style={{ fontSize: '120px' }}>404</h2>
        <p style={{ fontSize: '20px' }}>Not Found</p>
        <Link style={{ fontSize: '20px', color: 'inherit' }} to={AppRoute.Main}>
          Back to main page
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
