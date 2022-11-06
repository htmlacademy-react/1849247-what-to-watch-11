import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/films-type';

type FilmCardListProps = {
  films: FilmType[];
};

function FilmCardList({ films }: FilmCardListProps): JSX.Element {
  const renderFilmCards = (items: FilmType[]) =>
    items.map((item) => <FilmCard key={item.id} film={item} />);

  return <div className='catalog__films-list'>{renderFilmCards(films)}</div>;
}

export default FilmCardList;
