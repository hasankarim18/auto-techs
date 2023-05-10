import { useEffect } from "react"

const useTitle = (title)=> {
   useEffect(() => {
    document.title = `${title}-Auto Techs`  
   
   }, [title])  
    
}

export default useTitle;