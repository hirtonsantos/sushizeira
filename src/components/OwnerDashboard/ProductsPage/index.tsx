import { useState } from "react";
import { BsAlarm } from "react-icons/bs";
import { useOwner } from "../../../context/Owner/ownerContext";
import { useProduct } from "../../../context/Product/ProductContext";
import { Header } from "../Header";
import { Box, DataContent, RegisterContent, BoxContent, Conteiner, SelectBox, ProductsConteiner } from "./style";
import { BoxConteiner } from "./style";

interface ProductsProps {
  ison?: boolean;
  ishow?:boolean;
}

export const ProductsPage = ({}) => {

  const [isOn, setIsOn] = useState(false)
  const { product } = useProduct();
  const { isShow } = useOwner()

  return (
    <Conteiner>
      <Header/>
      <ProductsConteiner ishow={isShow}>
      <BoxContent>
      <h1> Produtos </h1>
      <button> Adicionar produto </button>
      </BoxContent>
      <DataContent>
        <Box> <h2> Nome </h2> </Box>
        <Box> <h2> QTD </h2> </Box>
        <Box> <h2> Preço </h2> </Box>
        <Box> <h2> Ações </h2> </Box>
      </DataContent>

      <RegisterContent>
      {
      product.map(item => {
        const isNotOn = () => {
          setIsOn(!isOn)
        }
        return(
        <BoxConteiner>
          <Box> <h2> {item.name} </h2> </Box>
          <Box> <h2> {item.quantityStock} </h2> </Box>
          <Box> <h2> R$ {item.price} </h2> </Box>
          <Box> <BsAlarm color="blue" onClick={() => isNotOn()}/> 
          <SelectBox ison={isOn}>
            <ul>
              <li>Finalizar</li>
              <li onClick={() => isNotOn()}>Cancelar</li>
            </ul>
          </SelectBox>
          </Box>
          
        </BoxConteiner>
      )})
    }
    </RegisterContent>
    </ProductsConteiner>
    </Conteiner>
  );
};