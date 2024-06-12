import { useState, useEffect } from "react";
import { getNums } from "./api/peti";
import { getIdFromUrl } from "./api/servicio";
import { Link, useParams } from "react-router-dom";
import { Container } from "./starEstilos";

const StarCompo = () => {
    const [characters, setCharacters] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getNums(id).then(res => setCharacters(res))
    }, [id]);

    const nums = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

    return (
        <div>
            <Container>
                {characters.map((character, index) => (
                    <div key={index}>
                        <Link to={`/persoCompo/${getIdFromUrl(character.url)}`}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(character.url)}.jpg`} alt="" />
                            <p>{character.name}</p>
                        </Link>
                    </div>

                ))}
            </Container>
            {nums.map((num, i) =>
                <Link key={i} to={`/${num}`}> {num} </Link>
            )}
        </div>
    );
};

export default StarCompo