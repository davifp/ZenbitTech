import Image from "next/image";
import {
  AsideContainer,
  ImageContainer,
  OrangeContainer,
  PinkContainer,
} from "./styles";
export const Aside: React.FC = () => {
  return (
    <AsideContainer>
      <ImageContainer>
        <Image
          src="/map.png"
          alt="map"
          width={626}
          height={924}
          layout="intrinsic"
        />
      </ImageContainer>
      <PinkContainer>
        <Image
          src={"/pink_cartoon.png"}
          alt="Pink Cartoon"
          width={214}
          height={208}
          layout="fixed"
        ></Image>
      </PinkContainer>
      <OrangeContainer>
        <Image
          src="/goodie.png"
          alt="Orange Cartoon"
          width={100}
          height={100}
          layout="fixed"
        />
      </OrangeContainer>
    </AsideContainer>
  );
};
