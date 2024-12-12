import { createContext, useState,useEffect, useContext } from "react"

const APIContext = createContext();

export function APIContextProvider({ children }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        async function getApi() {
            
            const res = await fetch('https://dummyjson.com/products/1');
            const data = await res.json();
            setProduct(data);
           
        }
        getApi();
        return () => {
            abortController.abort();
       }
     
    }, [setProduct])

    return (
        <APIContext.Provider value={{ product }}>
            {children}

        </APIContext.Provider>
    )
}
function ApiFetch() {
    const context = useContext(APIContext);
    if (context === undefined) {

        throw new Error("Context must be used within a Provider");
    }
    return APIContext;
   
}

export default ApiFetch
