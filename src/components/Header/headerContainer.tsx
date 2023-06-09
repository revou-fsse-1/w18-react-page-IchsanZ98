import { TitleHeading } from "./titleHeading";
import { TitleDescription } from "./titleDescription";
import { SearchBar } from "./searchBar";
import { LikeCounter } from "./likeCounter";

interface HeaderContainerProps{
    likedCount: number
    setQueryString: React.Dispatch<React.SetStateAction<string>>
    queryString: string
}
export function HeaderContainer(props: HeaderContainerProps){
    return(
        <>
            <TitleHeading/>
            <LikeCounter likedCount ={props.likedCount}/>
            <TitleDescription/>
            <SearchBar setQueryString = {props.setQueryString} queryString= {props.queryString}/>
        </>
    )
}