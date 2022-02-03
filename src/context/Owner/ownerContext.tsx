import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../Auth/AuthContext";

interface OwnerProvidersProps {
    children: ReactNode;
}

interface Request {
    id: string;
    price: number;
    status: string;
    details: detailsProps[];
    user: User;
    payment: string;
}

  

interface detailsProps {
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

interface User {
  address: string;
  admin: boolean;
  email: string;
  id: number;
  name: string;
}

interface OwnerProviderData {
  request: Request[];
  requestUser: Request[];
  isfinishedRequests: () => void;
  isRequestUser: (request: Request) => void;
  showIsOn: () => void;
  isShow: boolean;
}

const OwnerContext = createContext<OwnerProviderData>({} as OwnerProviderData);

export const OwnerProvider = ({ children }: OwnerProvidersProps) => {
  const [request, setRequest] = useState<Request[]>([]);
  const [requestUser, setRequestUser] = useState<Request[]>([]);
  const { user, accessToken } = useAuth();
  const [refresh, setRefresh] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const history = useHistory()

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
      if(request[i].status === "Finalizado"){
        result++
      }
    }
    return result
  } 


  const showIsOn = () => {
    setIsShow(!isShow)
  }

  const isRequestUser = (request: Request) => {
    setRequestUser([request])
    history.push("/detailsOwner")
  }
  
  return (
    <OwnerContext.Provider value={{request, isfinishedRequests, showIsOn, isShow, isRequestUser, requestUser}}>
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = () => useContext(OwnerContext);
      