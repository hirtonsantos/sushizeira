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
  description?: string;
  quantityStock: number;
}

interface ProductProps {
  id?: number | undefined;
  name: string;
  category: string;
  price: number;
  img: string;
  description?: string;
  quantityStock: number;
}

interface ProductProviderData {
  product: Product[];
  createProduct: (product: ProductProps) => void;
  deleteProduct: (product: Product) => void;
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

  const createProduct = (product: ProductProps) => {
    api
    .post(`/products/`, product, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      toast.success("Produto criado com sucesso!")
      setRefresh(!refresh)
    })
    .catch((err) => console.log(err)) 
  }

  const deleteProduct = (product: Product) => {
    api
    .delete(`/products/${product.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((_) => {
      toast.success("Produto removido com sucesso!")
      setRefresh(!refresh)})
  };
  

  return (
    <ProductContext.Provider value={{product, createProduct, deleteProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
      