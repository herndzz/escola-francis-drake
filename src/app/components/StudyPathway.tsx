import Image from 'next/image'
import '../styles/studyPathway.css'

// Aqui criei um(a) interface/objeto para definir um fluxo padrão de argumentos a serem passados para o componente
interface PathwayCardProps {
  name: string,
  desc: string,
  img: {
    src: string,
    alt: string,
    size: [number, number] //[height], [width]
  },
  btnText?: string
}

const PathwayCard = ({ name, desc, img, btnText }: PathwayCardProps) => {
  return (
    <div className="ciclos-bloco">
      <h2>{name}</h2>
      <p>{desc}</p>
      <Image src={img.src}
        alt={img.alt}
        height={img.size[0]}
        width={img.size[1]} />
      <div className="ciclo-button">
        <button onClick={undefined}>{btnText ?? 'Garanta Sua Vaga'}</button>
      </div>
    </div>
  )
}

const StudyPathway = () => {
  return (
    <div>
      <h2 className="title">Nossos Ciclos</h2>
      <section className="anos-escolares">
        <div className="ciclos">
          <PathwayCard name='Fundamental I'
            desc='do 1º ao 5º ano'
            img={{ src: "/images/photoPathway1.jpg", alt: "Colegial Photo", size: [300, 300] }} />
          <PathwayCard name='Fundamental II'
            desc='do 6º ao 9º ano'
            img={{ src: "/images/photoPathway2.jpeg", alt: "Classroom Photo", size: [300, 300] }} />
          <PathwayCard name='Ensino Médio'
            desc='da 1º à 3º série'
            img={{ src: "/images/photoPathway3.jpg", alt: "First Years of School Photo", size: [300, 300] }} />
        </div>
      </section>
    </div>
  )
}

export default StudyPathway