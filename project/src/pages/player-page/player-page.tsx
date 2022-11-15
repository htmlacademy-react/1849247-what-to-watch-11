import type { Film } from '../../types/films-type';

import { useState , MouseEvent } from 'react';
import { useParams } from 'react-router-dom';

type PlayerPageProps = {
  films: Film[];
};

function PlayerPage({ films }: PlayerPageProps): JSX.Element {
  const { id } = useParams();
  const [film] = useState(films.find((item) => item.id === Number(id)));

  const handlePlayButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    // console.log(evt);
    // МНЕ: При клике - воспроизвдение видео
  };

  return (
    <div className='player'>
      <video
        src={film?.videoLink}
        className='player__video'
        poster={film?.previewImage}
      >
      </video>

      <button type='button' className='player__exit'>
        Exit
      </button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value='30' max='100'></progress>
            <div className='player__toggler' style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          {/* МНЕ: должно отображаться в виде 1:30:29
          Использовать data-fns, day-js ... */}
          <div className='player__time-value'>{film?.runTime}</div>
        </div>

        <div className='player__controls-row'>
          <button type='button' className='player__play' onClick={handlePlayButtonClick}>
            <svg viewBox='0 0 19 19' width='19' height='19'>
              <use xlinkHref='#play-s'></use>
            </svg>
            <span>Play</span>
          </button>
          <div className='player__name'>Transpotting</div>

          <button type='button' className='player__full-screen'>
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
