import { Container, BoxLogo, TitleLogo, ImgLogo } from "./style";
import ImageLogo from "../../assets/sushiLogo.png";

function Header() {
  return (
    <Container>
      <BoxLogo>
        <ImgLogo src={ImageLogo} />
        <TitleLogo>Sushizeira</TitleLogo>
      </BoxLogo>
    </Container>
  );
}
export default Header;
