import Link from 'next/link'
import '../app/globals.css';

export const metadata = {
  title: 'Берий Тоаба',
  description: 'Группа компаний Тоаба',
}




export default function RootLayout({ children }) {
 return (
    <html lang="ru">
      <body>
        <div className="app">
            <section className="left-bar">
                <header className="logo">
                    <img src="/img/logo.svg" alt="Берий Тоаба"/>
                </header>

                <section className="bar-list">
                    <ul>
                        <Link href='/'>
                        <li className="active">
                            <img src="/img/icons/knowlwdge.svg" alt=""/>
                            <span>База знаний</span>
                        </li>
                        </Link>
        
                        <Link href="/home/quiz">
                            <li>
                                <img src="/img/icons/quiz.svg" alt=""/>
                                <span>Викторины</span>
                            </li>
                        </Link>

                        <li>
                            <img src="/img/icons/pre-school.svg" alt=""/>
                            <span>Дошколятам</span>
                        </li>
                        <li>
                            <img src="/img/icons/book.svg" alt=""/>
                            <span>Книги</span>
                        </li>
                        <li>
                            <img src="/img/icons/moon-stars.svg" alt=""/>
                            <span>Сказки</span>
                        </li>
                        <li>
                            <img src="/img/icons/multfilm.svg" alt=""/>
                            <span>Мультфильмы</span>
                        </li>
                        <li>
                            <img src="/img/icons/events.svg" alt=""/>
                            <span>Мероприятия</span>
                        </li>
                        <li>
                            <img src="/img/icons/game.svg" alt=""/>
                            <span>Игровой раздел</span>
                        </li>
                    </ul>
                </section>

                <footer>
                    <ul>
                        <li>
                            <div>
                                <a><img src="/img/icons/globe.svg" alt=""/></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a><img src="/img/icons/bell.svg" alt=""/></a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a><img src="/img/icons/settings.svg" alt=""/></a>

                            </div>
                        </li>
                        <li>
                            <div>
                                <a><img src="/img/icons/user.svg" alt=""/></a>
                            </div>
                        </li>
                    </ul>
                </footer>
            </section>

            {children}
        </div>
      </body>
    </html>
  )
}
