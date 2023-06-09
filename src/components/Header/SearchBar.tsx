// import { useState } from "react"

interface SearchBarProps{
    setQueryString: React.Dispatch<React.SetStateAction<string>>
    queryString: string
}
export function SearchBar(props: SearchBarProps){

    const handleFormEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setQueryString(e.target.value)
    }

    return(
        <div className="my-4 mx-auto w-[600px] font-bold">
            <input type="text" className="w-full border border-black rounded-xl text-lg py-2 px-2" placeholder="Search for Photos..." value={props.queryString} onChange={handleFormEvent}/>
        </div>
    )
}