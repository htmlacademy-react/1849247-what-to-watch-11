import { useState, ChangeEvent, FormEvent } from 'react';

type ReviewFormProps = {
  currentFilmId: string;
};

function ReviewForm({ currentFilmId }: ReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    currentFilmId: currentFilmId,
    rating: 0,
    text: '',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData({ ...formData, rating: 0, text: '' });
  };

  // TODO: валидация, состояние disabled

  return (
    <form action='#' className='add-review__form' onSubmit={handleSubmitForm}>
      <div className='rating'>

        <div className='rating__stars'>
          {/* TODO: много повторяющегося кода */}
          {/* визуально звезда не сбрасывается при сбросе state */}
          <input
            className='rating__input'
            id='star-10'
            type='radio'
            name='rating'
            value='10'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-10'>
            Rating 10
          </label>

          <input
            className='rating__input'
            id='star-9'
            type='radio'
            name='rating'
            value='9'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-9'>
            Rating 9
          </label>

          <input
            className='rating__input'
            id='star-8'
            type='radio'
            name='rating'
            value='8'
            onChange={handleFieldChange}
            // TODO: ругается консоль
            // checked
          />
          <label className='rating__label' htmlFor='star-8'>
            Rating 8
          </label>

          <input
            className='rating__input'
            id='star-7'
            type='radio'
            name='rating'
            value='7'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-7'>
            Rating 7
          </label>

          <input
            className='rating__input'
            id='star-6'
            type='radio'
            name='rating'
            value='6'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-6'>
            Rating 6
          </label>

          <input
            className='rating__input'
            id='star-5'
            type='radio'
            name='rating'
            value='5'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-5'>
            Rating 5
          </label>

          <input
            className='rating__input'
            id='star-4'
            type='radio'
            name='rating'
            value='4'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-4'>
            Rating 4
          </label>

          <input
            className='rating__input'
            id='star-3'
            type='radio'
            name='rating'
            value='3'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-3'>
            Rating 3
          </label>

          <input
            className='rating__input'
            id='star-2'
            type='radio'
            name='rating'
            value='2'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-2'>
            Rating 2
          </label>

          <input
            className='rating__input'
            id='star-1'
            type='radio'
            name='rating'
            value='1'
            onChange={handleFieldChange}
          />
          <label className='rating__label' htmlFor='star-1'>
            Rating 1
          </label>
        </div>
      </div>

      <div className='add-review__text' style={{'background': '#ffffff', 'opacity': '0.5'}}>
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
          <button
            className='add-review__btn'
            type='submit'
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
