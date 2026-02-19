import {useEffect, useState} from "react";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState();

    useEffect(() => {
        const id = 1;
        fetch(`https://sw-info-api.herokuapp.com/v1/peoples/${id}`)
        .then(res => res.json())
        .then(data =>setAboutMe(data))
            .catch(() => setAboutMe('Error loading character'))

    }, []);
    if (aboutMe) {
        return (
            <div >
                <h2> {aboutMe.name}</h2>
                <p>Gender: <span className="character-value"> {aboutMe.gender}</span></p>
                <p>Height: <span className="character-value">{aboutMe.height}</span></p>
                <p>Eyes: <span className="character-value">{aboutMe.eye_color}</span></p>
                <p>Mass: <span className="character-value">{aboutMe.mass}</span></p>
                <p>Home World: <span className="character-value">{aboutMe.homeworld}</span></p>
                <p>Born: <span className="character-value">{aboutMe.birth_year}</span></p>
            </div>
        );
    }else {
        return(
            <p >Loading...
                <span className={'spiner-border spinner-border-sm'}></span>
                <span className={'spiner-border spinner-grow-sm'}>Loading...</span>
            </p>
        )
    }
};

export default AboutMe;
