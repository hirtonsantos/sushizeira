import logo from "../../assets/logo.svg"
import {Container} from "./style"
import {useHistory} from "react-router-dom"
function Header({}) {
    const history = useHistory();
    return(
        <Container onClick={() => history.push("/")}>
            <img src={logo} alt="" />
            <span>Sushizeira</span>
        </Container>

    )
}

export default Header;
