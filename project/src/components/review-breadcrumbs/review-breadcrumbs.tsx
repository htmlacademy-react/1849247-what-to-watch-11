import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

type ReviewBreadcrumbsProps = {
  currentFilmName: string;
  currentFilmId: string;
};

function ReviewBreadcrumbs({ currentFilmName, currentFilmId }: ReviewBreadcrumbsProps): JSX.Element {
  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        <li className='breadcrumbs__item'>
          <Link to={`${AppRoute.Films}/${currentFilmId}`} className='breadcrumbs__link'>
            {currentFilmName}
          </Link>
        </li>
        <li className='breadcrumbs__item'>
          <Link to='.' className='breadcrumbs__link'>
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default ReviewBreadcrumbs;
