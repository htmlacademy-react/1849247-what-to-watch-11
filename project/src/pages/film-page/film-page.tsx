import type { Film } from '../../types/films-type';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AddToMyList from '../../components/add-to-my-list/add-to-my-list';
import FilmCardList from '../../components/film-card-list/film-card-list';
import { AppRoute } from '../../const';

type FilmPageProps = {
  films: Film[];
};

function FilmPage({ films }: FilmPageProps): JSX.Element {
  const { id } = useParams();
  const film = films.find((item) => item.id === Number(id)) || undefined;
  // ВОПРОС: как можно дестурктуризировать const { id, name, ... } = film ?
  // В данном месте программы film - это либо type Film, либо undefined.
  const navigate = useNavigate();

  return (
    <>
      {film && (
        <section
          className='film-card film-card--full'
          style={{'background': film.backgroundColor}}
        >
          <div className='film-card__hero'>
            <div className='film-card__bg'>
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className='visually-hidden'>WTW</h1>
            <Header specifyingСlass='film-card__head' />

            <div className='film-card__wrap'>
              <div className='film-card__desc'>
                <h2 className='film-card__title'>{film.name}</h2>
                <p className='film-card__meta'>
                  <span className='film-card__genre'>{film.genre}</span>
                  <span className='film-card__year'>{film.released}</span>
                </p>

                <div className='film-card__buttons'>
                  <button
                    className='btn btn--play film-card__button'
                    type='button'
                    onClick={() => navigate(`${AppRoute.Player}/${typeof id === 'string' ? id : ''}`)}
                  >
                    <svg viewBox='0 0 19 19' width='19' height='19'>
                      <use xlinkHref='#play-s'></use>
                    </svg>
                    <span>Play</span>
                  </button>

                  <AddToMyList />

                  <button
                    className='btn film-card__button'
                    onClick={() => navigate(AppRoute.AddReview)}
                  >
                    Add review
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className='film-card__wrap film-card__translate-top'>
            <div className='film-card__info'>
              <div className='film-card__poster film-card__poster--big'>
                <img src={film.posterImage} alt={film.name} width='218' height='327' />
              </div>

              <div className='film-card__desc'>
                <nav className='film-nav film-card__nav'>
                  <ul className='film-nav__list'>
                    <li className='film-nav__item film-nav__item--active'>
                      <a href='#' className='film-nav__link'>
                        Overview
                      </a>
                    </li>
                    <li className='film-nav__item'>
                      <a href='#' className='film-nav__link'>
                        Details
                      </a>
                    </li>
                    <li className='film-nav__item'>
                      <a href='#' className='film-nav__link'>
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className='film-rating'>
                  <div className='film-rating__score'>{film.rating}</div>
                  <p className='film-rating__meta'>
                    <span className='film-rating__level'>Very good</span>
                    <span className='film-rating__count'>{film.scoresCount} ratings</span>
                  </p>
                </div>

                <div className='film-card__text'>
                  <p>{film.description}</p>
                  <p>{film.description}</p>
                  <p className='film-card__director'>
                    <strong>Director: {film.director}</strong>
                  </p>
                  <p className='film-card__starring'>
                    <strong>
                      Starring: {film.starring} and other
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          {/* МНЕ: сделать специфичный вариант компонента, переиспользовать компонент Catalog */}
          <h2 className='catalog__title'>More like this</h2>

          <div className='catalog__films-list'>
            {/* МНЕ: сделать так чтобы на разных страницах
            компонент FilmCardList имел разное количество фильмов для отображения
            Здесь должно быть 4 фильма */}
            <FilmCardList films={films} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
