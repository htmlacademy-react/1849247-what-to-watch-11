import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FilmType } from '../../types/films-type';
import { AppRoute } from '../../const';

type FilmCardProps = {
  film: FilmType;
};

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [filmCard] = useState(film);

  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={filmCard.previewImage} alt={filmCard.name} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`${AppRoute.Films}/${filmCard.id}`}>
          {filmCard.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
