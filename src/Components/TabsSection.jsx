import { useState } from "react"
import "../Styles/TabsSection.css"
import { useContext } from "react"
import APIContext from "../Context/ApiFetchContext"


function TabsSection() {
    const { product, loading, error } = useContext(APIContext);

    const [activeTab, setActiveTab] = useState("detail");
   if (loading) return <div>Loading...</div>;
    if (error) return <div>error</div>
  

    
    return (
        <div className="tabs-section">
            <div className="tabs">
                <button className={activeTab === "detail" ? "active" : ""}
                    onClick={()=>setActiveTab("detail")}
                >
                    Detail

                </button>
                <button
                    className={activeTab === "How-to-use" ? "active" : ""}
                    onClick={() => setActiveTab("How-to-use")}
                >
                    How to use
                </button>
                <button
                    className={activeTab === "Ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("Ingredients")}
                >
                    Ingredients
                </button>

               
            </div>
            {product &&
                
            <div className="tab-content">
            
                {activeTab === "detail" && <p>{ product.description}</p>}
                {activeTab === "How-to-use" && <p>Apply the mascara from root to tip...</p>}
                {activeTab=== "Ingredients" && <p>Water, Beeswax, Glycerin...</p>}
                </div>
            }

            

        </div>
    )
}

export default TabsSection
