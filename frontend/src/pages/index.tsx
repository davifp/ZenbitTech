import type { NextPage } from "next";
import Image from "next/image";
import { Provider } from "react-redux";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Container, ImageContainer, MainContainer } from "../styles/Home";
import { store } from "../Redux/store";

const Home: NextPage = () => {
  return (
    <Container>
      <Provider store={store}>
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
      </Provider>
      <Footer />
    </Container>
  );
};

export default Home;
