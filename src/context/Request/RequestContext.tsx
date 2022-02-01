import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { useAuth } from "../Auth/AuthContext";
import { v4 as uuid } from 'uuid';

interface RequestProvidersProps {
    children: ReactNode;
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


interface User {
    email: string;
    id: number;
    name: string;
    address: string;
    admin: boolean;
}

interface Orders{
    id: string;
    price: number;
    details: Cart[];
    user: User;
    status: string;
    payment: string;
}

interface Rating{
  id?: string;
  userId: number;
  stars?: number;
  review?: string;
  idRequest?: string
}



interface RequestProviderData {
  request: Orders[];
  requestUser: Orders[];
  finishRequest: (cart: Cart[], price: number, payment: string) => void;
  updateRequest: (orderRequest: Orders) => void;
  createRating: (data: Rating) => void;
  rating: Rating[];
}

const RequestContext = createContext<RequestProviderData>({} as RequestProviderData);

export const RequestProvider = ({ children }: RequestProvidersProps) => {
  const [request, setRequest] = useState<Orders[]>([]);
  const [rating, setRating] = useState<Rating[]>([]);
  const [requestUser, setRequestUser] = useState<Orders[]>([]);
  const { user, accessToken } = useAuth();
  const [refresh, setRefresh] = useState(false)

  function finishRequest(cart: Cart[], price: number, payment: string){
    const order = {...{user: user, id: uuid(), price: price, payment:payment, status: "Aguardando aceitação", details: cart }}
    api
    .post(`/orders/`, order, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
        setRequest([...request, response.data])
        setRefresh(!refresh)
    })
    .catch((err) => {
      setRefresh(!refresh)
    })
  }

  const updateRequest = (orderUpdate: Orders) =>{
    api
    .patch(`/orders/${orderUpdate.id}`, orderUpdate, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log(response.data)
        setRequest([...request])
        setRefresh(!refresh)
    })
    .catch((err) => {
      console.log(err)
      setRefresh(!refresh)
    })
  }

  const createRating = (data: Rating) =>{
    api
    .post(`/rating/`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setRating([...rating, response.data])
    })
    .catch((err) => {
      console.log(err)
      setRefresh(!refresh)
    })
  }

  useEffect(()=>{
    api
    .get(`/orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setRequest(response.data)
      setRequestUser(response.data.filter((item:Orders)=>item.user.id === user.id))
    })
    .catch() 
  }, [refresh])

  useEffect(()=>{
    api
    .get(`/rating`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setRating(response.data)
    })
    .catch() 
  }, [refresh])

  

  return (
    <RequestContext.Provider value={{rating, createRating, request, requestUser, finishRequest, updateRequest}}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);
      