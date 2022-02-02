import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../Auth/AuthContext";
import { v4 as uuid } from 'uuid';

interface CartProvidersProps {
    children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  description?: string;
  quantityStock: number;
}
interface Cart{
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  description?: string;
  quantityStock: number;
  quantidade:number;
  userId: number;
}


interface CartProviderData {
  // cart é um array de produtos
  cart: Cart[];
  // addProduct recebe um produto e não tem retorno
  addProduct: (product: Product) => void;
 // deleteProducts recebe um produto e não tem retorno
  deleteProduct: (product: Cart) => void;
  subQuantidade: (product: Cart) => void;
  addQuantidade: (product: Cart) => void;
  deleteAll: () => void;
  getCart: () => void;
  setRefresh:(text:boolean)=>void;
  refresh: boolean;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProvidersProps) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const { user, accessToken } = useAuth();
  const [refresh, setRefresh] = useState(false)

  const addProduct = (product: Product) => {
    if(cart.filter((item)=>item.name===product.name).length === 0){
      const cartSend = {...{category:product.category, img:product.img, name:product.name, price:product.price, description:product.description, quantityStock: product.quantityStock}, ...{quantidade:1, userId:user.id, id:uuid()}}
      api
      .post("/cart", cartSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => setRefresh(!refresh))
  }else{
    const cardSend = cart.find((item)=>item.name===product.name) || cart[0];
    addQuantidade(cardSend)
  }
  };

  const addQuantidade = (product: Cart) => { 
    product.quantidade = product.quantidade+1;
    const cardSend = {...product}
    api
    .patch(`/cart/${cardSend.id}`, cardSend, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((_) => {
      setRefresh(!refresh)
    })
    .catch((err) => console.log(err))
  };

  const subQuantidade = (product: Cart) => {
    if(product.quantidade > 1){
      product.quantidade = product.quantidade-1;
    const cartSend = {...product}
   api
      .patch(`/cart/${product.id}`, cartSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        setRefresh(!refresh)
      })
    }
  };

  const deleteProduct = (productToBeDeleted: Cart) => {
    setCart([...cart.filter((item)=> item.id!==productToBeDeleted.id)])
    api
    .delete(`/cart/${productToBeDeleted.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((_) => setRefresh(!refresh))
  };

  const deleteAll = () =>{
    
    cart.forEach(function(item){
      setTimeout(function() {
        deleteProduct(item)
        setCart([])
      }, 1);
    });
    setCart([])
  }

  const getCart = () =>{
    api
    .get(`/cart`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setCart(response.data.filter((item:Cart)=>Number(item.userId) == Number(user.id)))
    })
    .catch(error => setCart(cart)) 
  }
  

  useEffect(()=>{
    api
    .get(`/cart`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setCart(response.data.filter((item:Cart)=>Number(item.userId) == Number(user.id)))
    })
    .catch(error => setCart(cart)) 
  }, [refresh])
  

  return (
    <CartContext.Provider value={{getCart, cart, deleteAll, addQuantidade, subQuantidade, addProduct, deleteProduct, setRefresh, refresh}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
      