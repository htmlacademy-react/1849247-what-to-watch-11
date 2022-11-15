import type { Film } from '../../types/films-type';

import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import ReviewBreadcrumbs from '../../components/review-breadcrumbs/review-breadcrumbs';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewPageProps = {
  films: Film[];
};

function AddReviewPage({ films }: AddReviewPageProps): JSX.Element {
  const { id } = useParams();
  const film = films.find((item) => item.id === Number(id)) || undefined;

  return (
    <>
      {film && (
        <section
          className='film-card film-card--full'
          style={{'background': film.backgroundColor}}
        >
          <div className='film-card__header'>
            <div className='film-card__bg'>
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className='visually-hidden'>WTW</h1>

            <Header>
              {/* ВОПРОС: хоть и проверка на film есть, id все равно может быть undefined.
              Определяется так: const { id } = useParams();
              Так как есть film - я точно знаю что есть и id, поэтому использую тут "as string"
              Так можно делать? Или как по другому можно? */}
              <ReviewBreadcrumbs currentFilmName={film.name} currentFilmId={id as string} />
            </Header>

            <div className='film-card__poster film-card__poster--small'>
              <img
                src={film.posterImage}
                alt={film.name}
                width='218'
                height='327'
              />
            </div>
          </div>

          <div className='add-review'>
            <ReviewForm currentFilmId={id as string} />
          </div>
        </section>
      )}

      {/* ВОПРОС: Линтер ругается что оберка во Фрагмент тут не нужна.
      Но тогда я не могу вставить блок с проверкой {film && (<section>...</section>).
      Так как мне нужно брать переменные уже для блока section */}
    </>
  );
}

export default AddReviewPage;
