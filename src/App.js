import React, {useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Homepage/Navbar.jsx'
import PostPage from './components/Homepage/PostPage.jsx'
import CoverPage from './components/Homepage/CoverPage.jsx'
import SidebarMenu from './components/Homepage/SidebarMenu.jsx'
import AdContainer from './components/Homepage/AdContainer.jsx'
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)


  // fetch delay simulation
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    <div>
      {/* Displays spinner for 2 seconds */}
      {!isLoaded ? 
        <div className="loading text-center">
          <div class="spinner-border text-dark mt-5 p-4" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      :
      <>
      <Navbar />      
      <CoverPage />
      
      <div className="triContainer container-fluid px-5 row mx-auto">
        <div className="col-xl-3">
        <SidebarMenu />         
        </div>
        <div className="col-xl-5">
        <PostPage />        
        </div>
        <div className="col-xl-3">
        <AdContainer />       
        </div>
               
        
      </div>
      

      
          
      
      </>
      }
      
      
    </div>
  )
}

export default App
