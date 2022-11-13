import type { Film } from '../../types/films-type';

import FilmCard from '../film-card/film-card';

type FilmCardListProps = {
  films: Film[];
};

function FilmCardList({ films }: FilmCardListProps): JSX.Element {
  return (
    <div className='catalog__films-list'>
      {films.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
}

export default FilmCardList;
