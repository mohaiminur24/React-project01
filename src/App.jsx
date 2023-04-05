import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'


function App() {

  return (
    <div className="App">
        <Header/>
        <div className='w-11/12 min-h-[calc(100vh-180px)] mx-auto my-5'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
