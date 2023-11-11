export default function QuizCard({ name, image, }) {
    return (
        <div className="card">
                    <div className="quiz-title" >
                        <h3>{name}</h3>
                    </div>
                    <div className="quiz-button">
                        <button>Пройти</button>
                    </div>
                </div>
    )
}