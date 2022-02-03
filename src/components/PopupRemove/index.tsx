import { useProduct } from "../../context/Product/ProductContext";
import ButtonYesOrNo from "../ButtonYesOrNo";
import { DivA, DivContainer, Div } from "./style";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    description?: string;
    quantityStock: number;
  }

interface PopupRemoveProps{
    product: Product;
    setPopup: (valor: boolean) => void;
}



function PopUpRemove({product, setPopup}: PopupRemoveProps) {
  const {deleteProduct} = useProduct();
  function removerCard() {
    deleteProduct(product)
    setPopup(false)
  }

  return (
    <DivA>
      <DivContainer>
        <Div>
          <h3>Remover {product.name}?</h3>
          <ButtonYesOrNo
            onclickYes={removerCard}
            onclickNo={() => setPopup(false)}
          ></ButtonYesOrNo>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpRemove;