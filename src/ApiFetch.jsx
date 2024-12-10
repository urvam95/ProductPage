import { useEffect, useState } from "react"

function ApiFetch() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function getApi() {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/products/1');
            const data = await res.json();
            setResult(data);
            setLoading(false);
           

            
        }
        getApi();
    }, [])
    console.log(result);
    const { id, brand, description, price, rating, thumbnail } = result;


    
    return (
        <div>

            lol
            <div>
                {loading? <div> Identifying</div>: id }
            </div>
            <div>
                <ul>

                {result && brand  }
                </ul>
            
                <ul>

                {result && description }
                </ul>
                <ul>

                {result && price  }
                </ul>
                <ul>

                {result && rating  }
                </ul>
                 <ul>

                {result && <img src={thumbnail}/>  }
                </ul>
               
            </div>

        </div>
    )
}

export default ApiFetch
