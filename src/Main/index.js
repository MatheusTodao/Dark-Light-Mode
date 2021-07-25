import React from 'react';

import Header from '../components/Header';

import { Container, SideText, SideImage } from './styles';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Container>
            <SideText className="side-text">
              <h1>
                O melhor <span>estilo,</span> é a sua personalidade!
              </h1>

              <p>
                O <span className="uppercase">segredo</span> de vestir-se com estilo é sentir confortavél. Lembre, seu visual é uma essência da sua <span>personalidade.</span>
              </p>
            </SideText>

            <SideImage className="side-image">
              <img
                src="https://images.pexels.com/photos/7061916/pexels-photo-7061916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Homem negro com dreads no cabelo, em pé ao Lado de uma vitrine fazendo uma pose thumblr."
              />
            </SideImage>
          </Container>
        </section>
      </main>

    </>
  )
}
