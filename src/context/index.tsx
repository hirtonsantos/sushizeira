import { ReactNode } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { CartProvider } from "./Cart/CartContext";
import { OwnerProvider } from "./Owner/ownerContext";
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
          <OwnerProvider>
            {children}
          </OwnerProvider>
        </RequestProvider>
      </CartProvider>
    </ProductProvider>
  </AuthProvider>
);
