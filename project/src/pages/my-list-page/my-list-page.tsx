import type { Film } from '../../types/films-type';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';


type MyListPageProps = {
  films: Film[];
};

function MyListPage({ films }: MyListPageProps): JSX.Element {
  return (
    <div className='user-page'>
      <Header specifyingСlass='user-page__head'>
        <h1 className='page-title user-page__title'>
          My list <span className='user-page__film-count'>9</span>
        </h1>
      </Header>

      {/* МНЕ: Нет фильтра жанров, здесь выводить 8 фильмов, больше - по кнопке Show more
      Сделать без передачи пропсов, а с помощью useLocation */}
      <Catalog isFilterRequired={false} films={films}/>
      <Footer />
    </div>
  );
}

export default MyListPage;
