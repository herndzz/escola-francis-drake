import React from 'react'
import Image from 'next/image'
import '../styles/navBar.css'

const NavBar = () => {
  return (
    <div>
      <header id="header">
        <a href="./index.html">
          <Image src={"/images/logo-francis-drake.svg"} alt='Image Logo' height={48} width={162} />
        </a>
        <nav id="navbar">
          <a href="../pages/matricule-se.html">Matricule-se</a>
          <a href="../pages/sobre.html">Sobre</a>
          <a href="../pages/diferenciais.html">Diferenciais</a>
          <a href="../pages/ciclos.html">Ciclos</a>
          <a href="../pages/blog.html">Blog</a>
          <a href="../pages/eventos.html">Eventos</a>
          <a href="../pages/mais.html">Mais</a>
        </nav>
      </header>
    </div>
  )
}

export default NavBar