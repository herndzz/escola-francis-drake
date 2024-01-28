import React from 'react'
import Image from 'next/image'
import '../styles/introduction.css'

function Introduction() {
  return (
    <section style={{display:'flex', flexDirection:'row', paddingTop:'3em'}}>
      <div style={{maxWidth:'50vw'}}>
        <div className="title">
          <h1>Na Escola Francis Drake, acreditamos que a educação é a chave para os mais afortunados.</h1>
        </div>
        <div className="text">
          <p>A Escola de Francis Drake está localizada em uma área tranquila e arborizada, em um bairro nobre da cidade. O prédio escolar é moderno e equipado com as mais recentes tecnologias educacionais, bem como espaços ao ar livre para os alunos explorarem.</p>
          <p>A escola oferece um currículo completo, com foco em ciências, matemática, literatura, arte e música. As aulas são projetadas para serem interativas e envolventes, permitindo que os alunos explorem e descubram o mundo ao seu redor. A escola também oferece aulas de idiomas estrangeiros, programação e robótica.</p>
        </div>
        <button onClick={undefined}>Conheça Nossos Diferenciais</button>
      </div>
      <Image className='introduction-img' src="/images/stairs.jpg" alt='Foto-Escadas' height={768} width={512} />
    </section>
  )
}

export default Introduction