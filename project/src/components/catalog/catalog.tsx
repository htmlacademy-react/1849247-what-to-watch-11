import type { Film } from '../../types/films-type';

import ShowMore from '../../components/show-more/show-more';
import FilmCardList from '../../components/film-card-list/film-card-list';

type CatalogProps = {
  films: Film[];
  isFilterRequired: boolean;
};

function Catalog({films, isFilterRequired}:CatalogProps): JSX.Element {
  // МНЕ: Доработать
  // - сделать компонент по умолчанию через пропсы по умолчанию, удалить передачу пропсов где не нужно
  // - сделать специфичный вариант компонента, добавить как вариант similarFilms

  return (
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      {isFilterRequired && (
        <ul className='catalog__genres-list'>
          <li className='catalog__genres-item catalog__genres-item--active'>
            {/* МНЕ: сделать через map */}
            <a href='#' className='catalog__genres-link'>
              All genres
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Comedies
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Crime
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Documentary
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Dramas
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Horror
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Kids & Family
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Romance
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Sci-Fi
            </a>
          </li>
          <li className='catalog__genres-item'>
            <a href='#' className='catalog__genres-link'>
              Thrillers
            </a>
          </li>
        </ul>
      )}

      <FilmCardList films={films} />
      <ShowMore />
    </section>
  );
}

export default Catalog;
