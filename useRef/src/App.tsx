import './App.css'
import { useRef} from 'react'

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleChange = ()=>{
    if(btnRef.current){
      btnRef.current.style.backgroundColor = "red";
    }
  }



  return (
    <div>
      
  <button ref={btnRef}>Color Change</button>
  <button onClick={handleChange}>Click ME</button> 
 




    </div>
  )
}

export default App
