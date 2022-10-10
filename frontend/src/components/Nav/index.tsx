import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";
import { NavContainer } from "./styles";

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Link href="https://www.linkedin.com/company/zenbit-tech/">
        <a target="_blank">
          <FaLinkedin size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="https://twitter.com/">
        <a target="_blank">
          <FaTwitter size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/zenBitTech/">
        <a target="_blank">
          <FaFacebook size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="https://pinterest.com/">
        <a target="_blank">
          <FaPinterest size={20} color={"#989898"} />
        </a>
      </Link>
    </NavContainer>
  );
};
