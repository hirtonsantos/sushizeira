import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { useAuth } from "../Auth/AuthContext";

interface ProductProvidersProps {
    children: ReactNode;
}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    quantityStock: string;
}

interface ProductProviderData {
  product: Product[];
}

const ProductContext = createContext<ProductProviderData>({} as ProductProviderData);

export const ProductProvider = ({ children }: ProductProvidersProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const { user, accessToken } = useAuth();
  const [refresh, setRefresh] = useState(false)

  

  useEffect(()=>{
    api
    .get(`/products`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setProduct(response.data)
    })
    .catch() 
  }, [refresh])
  

  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
      