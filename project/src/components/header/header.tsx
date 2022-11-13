import Logo from '../logo/logo';

type HeaderProps = {
  specifyingСlass?: string;
};

function Header({
  children,
  specifyingСlass = '',
}: React.PropsWithChildren<HeaderProps>): JSX.Element {

  return (
    <header className={`page-header ${specifyingСlass}`}>
      <Logo isFilled={false} />

      {children}

      {/* МНЕ: скрывать для неавторизованного пользователя */}
      <ul className='user-block'>
        <li className='user-block__item'>
          <div className='user-block__avatar'>
            <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
          </div>
        </li>
        <li className='user-block__item'>
          {/* МНЕ: должна быть не ссылка, а кнопка */}
          <a className='user-block__link'>Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
