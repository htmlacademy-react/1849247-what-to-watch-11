import Main from '../../pages/main/main';

type MainPageProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: MainPageProps): JSX.Element {
  return (
    <Main
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
