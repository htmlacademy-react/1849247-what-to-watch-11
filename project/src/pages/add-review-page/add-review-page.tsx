import Header from '../../components/header/header';
import ReviewBreadcrumbs from '../../components/review-breadcrumbs/review-breadcrumbs';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FilmType } from '../../types/films-type';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewPageProps = {
  films: FilmType[];
};

function AddReviewPage({ films }: AddReviewPageProps): JSX.Element {
  const { id } = useParams();
  const [film] = useState(films.find((item) => item.id === Number(id)));

  return (
    <section
      className='film-card film-card--full'
      style={{'background': film?.backgroundColor}}
    >
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header isOnMainPage={false} specifyingСlass=''>
          {/* TODO: типизировать id, обдумать type guard */}
          <ReviewBreadcrumbs currentFilmName={film?.name} currentFilmId={typeof id === 'string' ? id : ''} />
        </Header>

        <div className='film-card__poster film-card__poster--small'>
          <img
            src={film?.posterImage}
            alt={film?.name}
            width='218'
            height='327'
          />
        </div>
      </div>

      <div className='add-review'>
        <ReviewForm currentFilmId={typeof id === 'string' ? id : ''} />
      </div>
    </section>
  );
}

export default AddReviewPage;
