import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <section className="float-left w-1/4  mt-2 mr-4">
            <img className= " w-full shadow-hero hover:scale-110 " src={hero} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;