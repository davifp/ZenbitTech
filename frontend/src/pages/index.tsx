import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Container } from "../styles/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <Form />
      <Footer />
    </Container>
  );
};

export default Home;
