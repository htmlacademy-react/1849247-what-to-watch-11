import type { Film } from '../../types/films-type';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardProps = {
  id: Film['id'];
  name: Film['name'];
  previewImage: Film['previewImage'];
  // ВОПРОС: здесь можно как-то оптимизировать тип, чтобы написать только строку
  // [propName]: Film['propName'] и это применилось для всех пропсов в компоненте
};

function FilmCard({ id, name, previewImage }: FilmCardProps): JSX.Element {

  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={previewImage} alt={name} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`${AppRoute.Films}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
