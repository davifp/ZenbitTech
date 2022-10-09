import type { NextPage } from "next";
import Image from "next/image";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Container, ImageContainer, MainContainer } from "../styles/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <MainContainer>
        <ImageContainer>
          <Image
            src="/orange_cartoon.png"
            alt="Orange Cartoon"
            width={88}
            height={88}
            layout="fixed"
          ></Image>
        </ImageContainer>
        <Form />
        <Aside />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Home;
