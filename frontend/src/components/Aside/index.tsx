import Image from "next/future/image";
import {
  AsideContainer,
  ImageContainer,
  OrangeContainer,
  PinkContainer,
} from "./styles";

import mapImg from "../../../public/map.png";

export const Aside: React.FC = () => {
  return (
    <AsideContainer>
      <ImageContainer>
        <Image src={mapImg} alt="map" />
      </ImageContainer>
      <PinkContainer>
        <Image
          src={"/pink_cartoon.png"}
          alt="Pink Cartoon"
          width={214}
          height={208}
        ></Image>
      </PinkContainer>
      <OrangeContainer>
        <Image
          src="/goodie.png"
          alt="Orange Cartoon"
          width={100}
          height={100}
        />
      </OrangeContainer>
    </AsideContainer>
  );
};
