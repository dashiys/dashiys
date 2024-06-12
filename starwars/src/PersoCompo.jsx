import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFilms, getPerso } from "./api/peti"

const PersoCompo = () => {
    const { id } = useParams()
    const [info, setInfo] = useState()
    const [pelis, setPelis] = useState()

    useEffect(() => {
        getPerso(id).then(res => {
            setInfo(res)
            getFilms(res.films).then(data => setPelis(data))
        })
    }, [id]);
    console.log(111111, info)

    return (
        <div>
            <h1>{info?.name}</h1>
            <p>Height: {info?.height}</p>
            <p>Gender: {info?.gender}</p>
            <p>Hair color: {info?.hair_color}</p>
            <p>Skin: {info?.skin_color}</p>
            <h1>Films</h1>
            {pelis?.map((peli, index) => <p key={index}>{peli.title}</p>)}
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
        </div>
    )
}

export default PersoCompo