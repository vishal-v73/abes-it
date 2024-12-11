import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Marks name={"vishal"} roll={220030} m1={87} m2={75} m3={85}/>
    <Marks name={"rahul"} roll={220030} m1={87} m2={75} m3={85}/>

     */}
     <Displaymarks/>
  </StrictMode>,
)
