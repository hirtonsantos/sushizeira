import { useState } from "react";
import { useOwner } from "../../context/Owner/ownerContext";
import { useProduct } from "../../context/Product/ProductContext";
import { Header } from "../../components/OwnerDashboardHeader";
import { Box, DataContent, RegisterContent, BoxContent, Conteiner, ProductsConteiner } from "./style";
import { BoxConteiner } from "./style";
import PopUpCreateProduct from "../../components/PopUpCreateProducts";
import { NativeSelect } from "@mui/material";

export const ProductsPage = () => {

  const [popUp, setPopUp] = useState(false);
  const { product } = useProduct();
  const { isShow } = useOwner()

  const openPopUp = () => {
    setPopUp(true)
  }

  return (
    <Conteiner>
       {popUp && <PopUpCreateProduct  setPopup={setPopUp}/>}
      <Header/>
      <ProductsConteiner ishow={isShow}>
      <BoxContent>
      <h1> Produtos </h1>
      <button onClick={() => openPopUp()}> Adicionar produto </button>
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
        return(
        <BoxConteiner>
          <Box> <h2 title={String(item.name)}> {item.name} </h2> </Box>
          <Box> <h2> {item.quantityStock} </h2> </Box>
          <Box> <h2> R$ {item.price} </h2> </Box>
          <Box>
          <Box>
          <NativeSelect 
              fullWidth
              id="select"
              sx={{background: "white",}}
            >
              <option value={"Finalizar"}>Finalizar</option>
              <option value={"Cancelado"}>Cancelar pedido</option>
            </NativeSelect>
          </Box>
          </Box>
          
        </BoxConteiner>
      )})
    }
    </RegisterContent>
    </ProductsConteiner>
    </Conteiner>
  );
};