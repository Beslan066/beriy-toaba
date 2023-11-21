import QuizCard from '@/app/components/QuizCard';
import '../../../app/globals.css';

import Filter from '@/app/components/Filter';

let quiz = [
    {
        name: 'Химический карнавал',
        image: '/img/cards/quiz/1.png',
        background: '#B22752' 

    },
    {
        name: 'Биологическое приключение',
        image: '/img/cards/quiz/2.png',
        background: '#8A593C'
    },
    {
        name: 'Физика веселых открытий',
        image: '/img/cards/quiz/3.png',
        background: '#B55733'
    },
    {
        name: 'Звездные приключения',
        image: '/img/cards/quiz/4.png',
        background: '#E0583F'
    },
    {
        name: 'Путешествие по миру',
        image: '/img/cards/quiz/5.png',
        background: '#A6434F'
    },
    {
        name: 'С заботой о природе',
        image: '/img/cards/quiz/6.png',
        background: '#0A5656'
    },
    {
        name: 'Приключение по миру экологии',
        image: '/img/cards/quiz/7.png',
        background: '#4A4817'
    }

]

export default function QuizPage() {
    return (
        <section className="main-content">
        <div className="container quiz-container">

            <div className="filter-bar">
                <Filter />
            </div>
            
            <div className="cards">    
            {quiz.map(quiz => (
            <QuizCard key={quiz.id} name={quiz.name} image={quiz.image} background={quiz.background}/>
          ))}
            </div>

        </div>
    </section>
    )
  }