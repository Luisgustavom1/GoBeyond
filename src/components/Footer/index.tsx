import React from 'react';
import Image from 'next/image';

import Button from '../Button';
import { Container } from './styles';

import createdBy from '../../assets/imgs/site-logo-corebiz-preto-cinza.svg';
import poweredBy from '../../assets/imgs/Vector.svg';

const Footer: React.FC = () => {
  return(
    <Container>
      <article>
        <h1>Localização</h1>
        <span></span>
        <p>
          Avenida Andrômeda, 2000. Bloco 6 e 8<br/>

          Alphavile SP<br/>

          brasil@corebiz.ag<br/>

          +55 11 3090 1039
        </p>
      </article>

      <section>
        <Button
          width={195}
          height={38}
        >
          <i className="fas fa-envelope" />
          Entre em contato
        </Button>
        <Button 
          width={195}
          height={38}
        >
          <i className="fas fa-headset" />
          Fale com um de nós
        </Button>
      </section>

      <aside>
        <div>
          <p>Created by</p>
          <Image 
            src={createdBy}
            alt='Logo do criador'
          /> 
        </div>
        <div>
          <p>Powered by</p>
          <Image 
            src={poweredBy}
            alt='Logo do desenvolvedor'
          /> 
        </div>
      </aside>
    </Container>
  );
}

export default Footer;