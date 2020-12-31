import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Header, TitleLogo, Slogan, Button, LandingContainer } from "../styles/Home";

import Layout from "../components/Layout";

import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <Layout title="Home">
      <Header>
        <TitleLogo>Cwb Covid Meter</TitleLogo>
        <button onClick={e => handleClick(e)}>Instlal</button>
        <a href="https://github.com/marcelo-schreiber" target="_blank" rel="noreferrer">
          <FaGithub size={64} color="#FFF" style={{ cursor: "pointer" }} />
        </a>
      </Header>

      <LandingContainer>
        <div>
          <Slogan>Veja como Curitiba enfrenta o corona vírus.</Slogan>
          <Link href="/graficos" passHref={true}>
            <Button>Explorar</Button>
          </Link>
        </div>
        <Image
          src="/Landing.png"
          alt="landing"
          width={770}
          height={803}
          priority={true}
        />
      </LandingContainer>
    </Layout>
  );
}

export default Home;
