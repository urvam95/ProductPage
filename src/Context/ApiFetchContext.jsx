import { createContext, useState,useEffect } from "react"

const APIContext = createContext();

// eslint-disable-next-line react/prop-types
export function APIContextProvider({ children }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        async function getApi() {
            try {
              
                setLoading(true);
                    
                const res = await fetch('https://dummyjson.com/products/1');
            
                if (!res.ok) {
                    throw new Error("Failed to fetch product details");    
                }

                const data = await res.json();
                setProduct(data);     
                
            }   
            catch (e) {
                setError(e.message);
            }
            finally {
                setLoading(false);
            }
           
        }
        getApi();
        return () => {
            abortController.abort();
       }
     
    }, [])
   
    
    return (
        <APIContext.Provider value={{ product,loading, error }}>
            {children}

        </APIContext.Provider>
    )
}
// function ApiFetch() {
//     const context = useContext(APIContext);
//     if (context === undefined) {

//         throw new Error("Context must be used within a Provider");
//     }
//     return APIContext;
   
// }

export default APIContext;
