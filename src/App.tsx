import { useState } from 'react'
import { CardContainer } from "./components/Contents/cardContainer"
import { HeaderContainer } from "./components/Header/headerContainer"
import { FormContainer } from "./components/Form/formContainer"
import "./App.css";

function App() {
    const [likedCount, setLikedCount] = useState(0);
    const [queryString, setQueryString] = useState("")
return (
    <div className="flex flex-col items-center">
        <HeaderContainer likedCount={likedCount} setQueryString={setQueryString} queryString={queryString}/>
        <CardContainer setLikedCount={setLikedCount} queryString={queryString}/>
        <FormContainer/>
    </div>
    
)
}

document.body.className = "bg-black"

export default App
