import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../Auth/AuthContext";

interface OwnerProvidersProps {
    children: ReactNode;
}

interface Request {
    costumer: string;
    id: number;
    price: number;
    status: string;
    details: detailsProps[];
    user: User;
}

interface detailsProps {
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  timeToCook: number;
}

interface User {
  address: string;
  admin: boolean;
  email: string;
  id: number;
  name: string;
}

interface OwnerProviderData {
  request: Request[];
  isfinishedRequests: () => void;
  showIsOn: () => void;
  isShow: boolean;
}

const OwnerContext = createContext<OwnerProviderData>({} as OwnerProviderData);

export const OwnerProvider = ({ children }: OwnerProvidersProps) => {
  const [request, setRequest] = useState<Request[]>([]);
  const { user, accessToken } = useAuth();
  const [refresh, setRefresh] = useState(false)
  const [isShow, setIsShow] = useState(false)

  console.log(request)

  // orders?userId${user.id}

  useEffect(()=>{
    api
    .get(`orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setRequest(response.data)
    })
    .catch() 
  }, [refresh])

  const isfinishedRequests = () => {
    let result = 0
    for(let i = 0; i < request.length; i++){
      if(request[i].status === "finished"){
        result++
      }
    }
    return result
  } 

  const showIsOn = () => {
    setIsShow(!isShow)
  }
  
  return (
    <OwnerContext.Provider value={{request, isfinishedRequests, showIsOn, isShow}}>
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = () => useContext(OwnerContext);
      