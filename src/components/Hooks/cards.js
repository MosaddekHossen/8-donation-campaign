import { useEffect } from "react";
import { useState } from "react";

const cards = () => {
    const [cards,setCards] = useState();
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    return [cards]
};

export default cards;