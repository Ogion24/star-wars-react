import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        const period = 30 * 24 * 60 * 60 * 1000;// days->>>milliseconds
        const savedData = localStorage.getItem("planet");
        if (savedData) {
            const parsed = JSON.parse(savedData);
            const outOfDate = Date.now() - parsed.timestamp > period;
            if (!outOfDate) {
                setPlanets(parsed.data);
                return
            }
        }


        fetch(`${base_url}/v1/planets`)
            .then(response => response.json())
            .then(data => {
                setPlanets(data);
                localStorage.setItem("planet", JSON.stringify({
                    data: data,
                    timestamp: Date.now(),
                }));
            })
    }, [])
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="country">Planet</label>
                <select id="country" name="planet">
                    {planets.map((planet) => (
                        <option key={planet.name} value={planet.name}>
                            {planet.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."
                          style={{height: "200px"}}></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;