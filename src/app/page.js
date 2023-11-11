import Card from './components/Card';
import '../app/globals.css';


let cards = [
  {
    id: 1,
    name: "Астрономия",
    image: "/img/cards/astro.svg"  
  },
  {
    id: 2,
    name: "БИОЛОГИЯ",
    image: "/img/cards/bio.svg"
  },
  {
    id: 3,
    name: "ХИМИЯ",
    image: "/img/cards/chemistry.svg"
  },
  {
    id: 4,
    name: "ЭКОЛОГИЯ",
    image: "/img/cards/eco.svg"
  },
  {
    id: 5,
    name: "ФИЗИКА",
    image: "/img/cards/phys.svg"
  },
  {
    id: 6,
    name: "ИСТОРИЯ",
    image: "/img/cards/history.svg"
  }

]

export default function Home() {
  return (
    <section className="main-content">
            <div className="container knowledge-container">
        <div className="main-banner">
            <div className="banner-header">
                <h2>Образовательный проект ”Берий Тоаба”</h2>
            </div>
            <div className="banner-figures">
                <img src="/img/banner-eclipse.svg" alt=""/>
                <button>Подробнее</button>
            </div>
        </div>

        <div className="cards">
          {cards.map(card => (
            <Card key={card.id} name={card.name} image={card.image} />
          ))}
        </div>
    </div>
        </section>
  )
}
