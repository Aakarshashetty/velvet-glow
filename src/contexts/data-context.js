import { createContext, useEffect, useState } from "react";

const DataContext = createContext();
export const DataContextProvider = ({children}) => {
    const [productData, setProductData] = useState([]);
    useEffect(()=>{
        (async()=>{
            try{
                const 
            }catch(e){

            }
        })();
    },[])
    return(
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    )
}
