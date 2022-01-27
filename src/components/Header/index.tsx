import logo from "../../assets/logo.svg"
import {Container} from "./style"

function Header({}) {
    return(
        <Container>
            <img src={logo} alt="" />
            <span>Sushizeira</span>
        </Container>

    )
}

export default Header;