'use client'
import React from 'react'
import { StyledFooter, LinksContainer } from './StyledFooter'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <LinksContainer>
          <ul>
            <li><a href="">Matricule-se</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Diferenciais</a></li>
            <li><a href="">Fundamental I</a></li>
            <li><a href="">Fundamental II</a></li>
            <li><a href="">Ensino Médio</a></li>
            <li><a href="">Eventos</a></li>
            <li><a href="">Uniformes</a></li>
            <li><a href="">E-books</a></li>
            <li><a href="">Carreiras</a></li>
            <li><a href="">Política de Privacidade</a></li>
          </ul>
        </LinksContainer>
        <div>
          <div className="phones">
            <p>São Paulo: (11) 94002-8922</p>
            <p>Minas Gerais: (33) 94815-1623</p> {/* Números de Lost: 4, 8, 15, 16, 23 e 42 */}
          </div>
          <div className="social-medias">
            <Link href="/">
              <Image src={"/images/social-media/instagram.svg"} alt='instagram-logo' height={32} width={32} />
            </Link>
            <Link href="/">
              <Image src={"/images/social-media/facebook.svg"} alt='facebook-logo' height={32} width={32} />
            </Link>
            <Link href="/">
              <Image src={"/images/social-media/linkedin.svg"} alt='linkedin-logo' height={32} width={32} />
            </Link>
          </div>
        </div>
      </div>
      <p>Escola Francis Drake 2023 - Todos os direitos reservados©</p>
    </StyledFooter>
  )
}

export default Footer