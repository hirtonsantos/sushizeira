import logo from "../../assets/logo.svg"
import { ButtonsMenuOff } from "./style";
import {Div, DivA, DivContainer} from "./style"
import {FaWindowClose} from "react-icons/fa"

interface PopupWarningProps{
    activePopupWarning: () => void;
}

function PopupWarning({activePopupWarning}:PopupWarningProps) {
    return(
        <DivA>
            <DivContainer>
                <FaWindowClose onClick={activePopupWarning}/>
                <Div>
                        <span>
                            Entre para comprar!
                        </span>
                    <ButtonsMenuOff>
                        <button className="btn-login">Entrar</button>
                        <button>Cadastrar</button>
                    </ButtonsMenuOff>
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopupWarning;