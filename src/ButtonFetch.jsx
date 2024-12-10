import { useState } from "react"
import ApiFetch from "./ApiFetch"
function ButtonFetch() {
    const [fetch, setFetch] = useState(null);

    function handleClick() {
        <ApiFetch/>
        setFetch(ApiFetch)

       console.log(fetch)
   }
    return (
        <button onClick={handleClick}>Fetch me </button>
    )
}

export default ButtonFetch
