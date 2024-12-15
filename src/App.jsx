
import { APIContextProvider } from './Context/ApiFetchContext'
import "./App.css"
import Products from './Components/Products'
import NavBar from './Components/NavBar'

function App() {
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

  return (
    
    <div className='app-container' >
      <APIContextProvider>
        <NavBar/>
        <Products/>
      </APIContextProvider>
      </div> 
      
  )
}

export default App
