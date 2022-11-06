import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { FilmType } from '../../types/films-type';
import Catalog from '../../components/catalog/catalog';


type MyListPageProps = {
  films: FilmType[];
};

function MyListPage({ films }: MyListPageProps): JSX.Element {
  return (
    <div className='user-page'>
      <Header isOnMainPage={false} specifyingСlass='user-page__head'>
        <h1 className='page-title user-page__title'>
          My list <span className='user-page__film-count'>9</span>
        </h1>
      </Header>

      {/* Нет фильтра жанров, здесь выводит 8 фильмов, больше - по кнопке Show more */}
      <Catalog isFilterRequired={false} films={films}/>
      <Footer isOnMainPage={false} />
    </div>
  );
}

export default MyListPage;
