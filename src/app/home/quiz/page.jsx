import QuizCard from '@/app/components/QuizCard';
import '../../../app/globals.css';

let quiz = [
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    
]

export default function QuizPage() {
    return (
        <section className="main-content">
        <div className="container quiz-container">

            <div className="filter-bar">
                <div className="filter">
                    <button><img src="img/icons/filter.svg" alt=""/><span>Фильтр</span></button>
                    <div className="filter-items">
                        <ul>
                            <li>Астрономия</li>
                            <li>Биология</li>
                            <li>География</li>
                            <li>Физика</li>
                            <li>Химия</li>
                            <li>История</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <div className="cards">    
                <div className="card">
                    <div className="quiz-title" >
                        <h3>Химический карнавал</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>

                <div className="card">
                    <div className="quiz-title">
                        <h3>Биологическое приключение</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>

                <div className="card">
                    <div className="quiz-title">
                        <h3>Физика веселых открытий</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>

                <div className="card">
                    <div className="quiz-title">
                        <h3>Звездные приключения</h3>
                    </div>

                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>

                <div className="card">
                    <div className="quiz-title">
                        <h3>Путешествие по миру</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                    
                </div>

                <div className="card">
                    <div className="quiz-title">
                        <h3>С заботой о природе</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>

                <div className="card">
                    <div className="quiz-title">
                        <h3>Приключение по миру экологии</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
  }