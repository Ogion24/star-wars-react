import {useEffect, useState} from "react";
import {base_url,period_month} from "../utils/constants.js";


const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < period_month)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });


    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data = await res.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }


        if (planets.length === 1){
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [])


    return (
        <form className="border bg-amber-50 p-6 rounded-md max-x-md mx-auto space-y-4 " onSubmit={e => {
            e.preventDefault();
        }}>
            <label className=" block w-full ">First Name
                <input className=" p-3 border rounded-md mt-1 block w-full text-black" type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label className=" w-full ">Last Name
                <input className="p-3 border rounded-md mt-1 block w-full text-black" type="text" name="lastname " placeholder="Your last name.."/>
            </label>
            <label className=" w-full  ">Planet
                <select className="text-black ml-5 mt-3" name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>


            <label className="block w-full mt-5">Subject
                <textarea className="p-3 border rounded-md mt-1 block w-full h-48 text-black" name="subject" placeholder="Write something.."></textarea>
            </label>
            <button className="bg-green-300 text-black px-3 rounded-md cursor-pointer hover:text-white hover:bg-red-500" type="submit">Submit</button>
        </form>
    )
}





export default Contact;