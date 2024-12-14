
import { APIContextProvider } from './Context/ApiFetchContext'
import "./App.css"
import Products from './Components/Products'
import NavBar from './Components/NavBar'

function App() {


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
