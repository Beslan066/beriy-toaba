

export default function Card({ name, image, }) {
    return (
        <div className="card">
                <h2>{name}</h2>
                <div className="card-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="card-button">
                    <button>
                        <span>Изучить</span>
                        <img src="/img/Arrow.svg" alt=""/>
                    </button>
                </div>
            </div>
    )
};