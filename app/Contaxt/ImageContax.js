import { createContext, useState } from "react";

export const ImageContext = createContext()

export const ImageProvider = ({childern}) =>{
    const [images , setImage] = useState({})

    const addImage  = (cardId , image) =>{
        setImage(PrevImage => ({...PrevImage , [cardId]:image}));
    }

    return(
        <ImageContext.Provider value={{images,addImage }}>
            {childern}
        </ImageContext.Provider>
    )
}