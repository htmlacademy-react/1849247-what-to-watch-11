import { useState, ChangeEvent, FormEvent, Fragment } from 'react';

import { NUMBER_OF_STARS } from '../../const';

type ReviewFormProps = {
  currentFilmId: string;
};

function ReviewForm({ currentFilmId }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    currentFilmId: currentFilmId,
    rating: '0',
    text: '',
  });

  const handleFieldChange = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      rating: '0',
      text: '',
    });
  };

  const createReverseStarsArray = (quantity: number): string[] => {
    const reverseStarsArray = new Array(quantity)
      .fill('')
      .map((value: string, i: number) => (value = (i + 1).toString()))
      .reverse();

    return reverseStarsArray;
  };

  // МНЕ: сделать - валидация, состояние disabled

  return (
    <form action='#' className='add-review__form' onSubmit={handleSubmitForm}>
      <div className='rating'>
        <div className='rating__stars'>
          {createReverseStarsArray(NUMBER_OF_STARS).map((value: string) => (
            <Fragment key={`star-${value}`}>
              <input
                className='rating__input'
                id={`star-${value}`}
                type='radio'
                name='rating'
                value={value}
                onChange={handleFieldChange}
                checked={formData.rating === value}
              />
              <label className='rating__label' htmlFor={`star-${value}`}>
                Rating {value}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className='add-review__text' style={{ background: '#ffffff', opacity: '0.5' }}>
        <textarea
          className='add-review__textarea'
          name='text'
          id='review-text'
          placeholder='Review text'
          value={formData.text}
          onChange={handleFieldChange}
        >
        </textarea>

        <div className='add-review__submit'>
          <button className='add-review__btn' type='submit'>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
