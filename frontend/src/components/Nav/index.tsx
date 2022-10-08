import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";
import { NavContainer } from "./styles";

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Link href="/">
        <a>
          <FaLinkedin size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaTwitter size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaFacebook size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FaPinterest size={20} color={"#989898"} />
        </a>
      </Link>
    </NavContainer>
  );
};
