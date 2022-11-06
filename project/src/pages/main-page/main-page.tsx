import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import { useNavigate } from 'react-router-dom';

import AddToMyList from '../../components/add-to-my-list/add-to-my-list';
import { AppRoute } from '../../const';

import { FilmType } from '../../types/films-type';

type MainPageProps = {
  promoFilm: FilmType;
  films: FilmType[];
};

function MainPage({ promoFilm, films }: MainPageProps): JSX.Element {
  const {id, name, posterImage, genre, released, backgroundImage} = promoFilm;
  const navigate = useNavigate();

  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className='visually-hidden'>WTW</h1>

        <Header isOnMainPage specifyingСlass='film-card__head' />

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img
                src={posterImage}
                alt={name}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{genre}</span>
                <span className='film-card__year'>{released}</span>
              </p>

              <div className='film-card__buttons'>

                {/* TODO: Повторяющийся код */}
                <button
                  className='btn btn--play film-card__button'
                  type='button'
                  onClick={() => navigate(`${AppRoute.Player}/${id}`)}
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>

                <AddToMyList />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <Catalog isFilterRequired films={films}/>
        <Footer isOnMainPage />
      </div>
    </>
  );
}

export default MainPage;
