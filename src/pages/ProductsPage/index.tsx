import { useState } from "react";
import { useOwner } from "../../context/Owner/ownerContext";
import { useProduct } from "../../context/Product/ProductContext";
import { Header } from "../../components/OwnerDashboardHeader";
import { Box, DataContent, RegisterContent, BoxContent, Conteiner, ProductsConteiner } from "./style";
import { BoxConteiner } from "./style";
import PopUpCreateProduct from "../../components/PopUpCreateProducts";
import { NativeSelect } from "@mui/material";
import PopUpRemove from "../../components/PopupRemove";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  description?: string;
  quantityStock: number;
}


export const ProductsPage = () => {

  const [popUp, setPopUp] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const { isShow } = useOwner()
  const [itemProduct, setItemProduct] = useState({} as Product);
  const {product} = useProduct();


  const openPopUp = () => {
    setPopUp(true)
  }

  const deleteProductPage = (item: Product) =>{
    setPopupDelete(true);
    setItemProduct(item)
  }

  return (
    <Conteiner>
       {popUp && <PopUpCreateProduct  setPopup={setPopUp}/>}
       {popupDelete && <PopUpRemove product={itemProduct} setPopup={setPopupDelete}/>}
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
          <Box> <h2> {`R$ ${((item.price).toFixed(2)).toString().replace(".", ",")}`} </h2> </Box>
          <Box>
          <Box 
          onClick={() => deleteProductPage(item)}
          >
          <h2 className="remove">
            Remover produto
          </h2>
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