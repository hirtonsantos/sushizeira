import logo from "../../assets/logo.svg"
import { ButtonsMenuOff } from "./style";
import {Div, DivA, DivContainer} from "./style"
import {FaWindowClose} from "react-icons/fa"
import { useHistory } from "react-router-dom";

interface PopupWarningProps{
    activePopupWarning: () => void;
}

function PopupWarning({activePopupWarning}:PopupWarningProps) {
    const history = useHistory();
    return(
        <DivA>
            <DivContainer>
                <FaWindowClose onClick={activePopupWarning}/>
                <Div>
                        <span>
                            Entre para comprar!
                        </span>
                    <ButtonsMenuOff>
                        <button className="btn-login" onClick={() => history.push("/login")}>Entrar</button>
                        <button onClick={() => history.push("/signup")}>Cadastrar</button>
                    </ButtonsMenuOff>
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopupWarning;