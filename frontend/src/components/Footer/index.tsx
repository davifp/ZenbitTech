import Image from "next/image";
import { FooterContainer } from "./styles";
import { Nav } from "../Nav";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <Image
          src="/pink_cartoon_footer.png"
          alt="pink cartoon"
          width={250}
          height={200}
        />
        <Nav />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 127,
        }}
      >
        <Image
          src="/upside_cartoon.png"
          alt="upside down"
          width={80}
          height={100}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 50,
          right: 0,
        }}
      >
        <Image
          src="/orange_cartoon_footer.png"
          alt="upside down"
          width={85}
          height={110}
        />
      </div>
    </FooterContainer>
  );
};
