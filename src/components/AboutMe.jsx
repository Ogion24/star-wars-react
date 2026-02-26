import {useEffect, useState} from "react";
import {base_url, heroFields} from "../utils/constants.js";


const AboutMe = () => {
    const [hero, setHero] = useState(null);
    useEffect(() => {
        const period = 30 * 24 * 60 * 60 * 1000;// days->>>milliseconds
        const savedData = localStorage.getItem("hero");
        if (savedData) {
            const parsed = JSON.parse(savedData);
            const outOfDate = Date.now() - parsed.timestamp > period;
            if (!outOfDate) {
                setHero(parsed.data);
                return
            }
        }



            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {

                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        data: info,
                        timestamp : Date.now(),
                    }));
                })
        }, [])


        return (
            <>
                {(!!hero) &&
                    <div className='fs-2 lh-lg text-justify text-3xl ms-5'>
                        {heroFields.map(({ label, key }) => (
                            <p key={key}>
                                <span className="text-violet-500">{label}:</span> {hero[key]}
                            </p>
                        ))}
                        {/*<p><span className='character-value'>name:</span> {hero.name}</p>*/}
                        {/*<p><span className='character-value'>gender:</span> {hero.gender}</p>*/}
                        {/*<p><span className='character-value'>birth year:</span> {hero.birth_year}</p>*/}
                        {/*<p><span className='character-value'>height:</span> {hero.height}</p>*/}
                        {/*<p><span className='character-value'>mass:</span> {hero.mass}</p>*/}
                        {/*<p><span className='character-value'>hair color:</span> {hero.hair_color}</p>*/}
                        {/*<p><span className='character-value'>skin color:</span> {hero.skin_color}</p>*/}
                        {/*<p><span className='character-value'>eye color:</span> {hero.eye_color}</p>*/}
                    </div>
                }
            </>
        );

    }

    export default AboutMe;
