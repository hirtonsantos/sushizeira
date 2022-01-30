import { ReactNode } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { CartProvider } from "./Cart/CartContext";
import { ProductProvider } from "./Product/ProductContext";
import { RequestProvider } from "./Request/RequestContext";


interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <RequestProvider>
          {children}
        </RequestProvider>
      </CartProvider>
    </ProductProvider>
  </AuthProvider>
);
