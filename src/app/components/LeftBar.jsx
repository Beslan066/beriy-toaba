import Link from 'next/link'
import React from 'react';


const links = [
    {
        title: 'База знаний',
        image: '/img/icons/knowlwdge.svg',
        action: '/'
    },
    {
        title: 'Викторины',
        image: '/img/icons/quiz.svg',
        action: '/home/quiz' 
    },
    {
        title: 'Дошколятам',
        image: '/img/icons/pre-school.svg',
        action: ''
    },
    {
        title: 'Книги',
        image: '/img/icons/book.svg',
        action: ''
    },
    {
        title: 'Сказки',
        image: '/img/icons/moon-stars.svg',
        action: ''
    },
    {
        title: 'Мультфильмы',
        image: '/img/icons/multfilm.svg',
        action: ''
    },

    {
        title: 'Мероприятия',
        image: '/img/icons/events.svg',
        action: ''
    },
    {
        title: 'Игровой раздел',
        image: '/img/icons/game.svg',
        action: ''
    },
]

export default function LeftBar() {
    return (
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
                        <Link href="/home/fairy">
                            <li>
                                <img src="/img/icons/moon-stars.svg" alt=""/>
                                <span>Сказки</span>
                            </li>
                        </Link>
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
    )
}