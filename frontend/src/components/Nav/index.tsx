import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";
import { NavContainer } from "./styles";

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Link href="https://www.linkedin.com/company/zenbit-tech/">
        <a>
          <FaLinkedin size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="https://twitter.com/">
        <a>
          <FaTwitter size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/zenBitTech/">
        <a>
          <FaFacebook size={20} color={"#989898"} />
        </a>
      </Link>
      <Link href="https://pinterest.com/">
        <a>
          <FaPinterest size={20} color={"#989898"} />
        </a>
      </Link>
    </NavContainer>
  );
};
