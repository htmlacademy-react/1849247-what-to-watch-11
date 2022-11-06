import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

function AddToMyList(): JSX.Element {

  const navigate = useNavigate();

  return (
    <button className='btn btn--list film-card__button' type='button' onClick={() => navigate(AppRoute.MyList)}>
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref='#add'></use>
      </svg>
      <span>My list</span>
      <span className='film-card__count'>9</span>
    </button>
  );
}

export default AddToMyList;
