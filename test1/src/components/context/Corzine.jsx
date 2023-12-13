import { createContext, useEffect, useState } from "react"; 
import axios from "axios";

export const StoreContext = createContext({}) 
 
const StoreProvider = ({children}) => { 

    let [ data, setData ] = useState([])
    




    return( 
        <StoreContext.Provider value={[ data, setData ]}>
        {children} 
        </StoreContext.Provider> 
    ) 
} 
export default StoreProvider