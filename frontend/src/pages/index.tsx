import type { NextPage } from "next";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Container, MainContainer } from "../styles/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <MainContainer>
        <Form />
        <Aside />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Home;
