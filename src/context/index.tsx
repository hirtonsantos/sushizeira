import { ReactNode } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { CartProvider } from "./Cart/CartContext";
import { OwnerProvider } from "./Owner/ownerContext";
import { ProductProvider } from "./Product/ProductContext";


interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  
  <AuthProvider>
    {/* <CartProvider> */}
      <ProductProvider>
        <OwnerProvider>
        {children}
        </OwnerProvider>
      </ProductProvider>
    {/* </CartProvider> */}
  </AuthProvider>
);
