import { createContext, useState } from "react";

 
  export  const context=createContext([]);
 function Fav(props)
 {
const [fav,setfav]=useState([]);
const addfav=(id)=>{

    setfav([...fav,id]);
}
const removefav=(id)=>{
    setfav(fav.filter((item)=>item!=id)
   )
}
    return <context.Provider value={{removefav,addfav,fav}} 
    >{props.children}</context.Provider>



 }

 export default Fav;