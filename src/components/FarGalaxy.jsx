import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";



const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const episode= Math.floor(Math.random() * 6) +1
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(() => setOpeningCrawl('Error loading opening crawl'))
    }, []);
    if (openingCrawl) {
        return (
            <div className="crawl-container">
                <p className="far-galaxy">{openingCrawl}
                </p>
            </div>
        );
    }else {
        return(
        <p className="far-galaxy">Loading...
            <span className={'spiner-border spinner-border-sm'}></span>
            <span className={'spiner-border spinner-grow-sm'}>Loading...</span>
        </p>
        )
    }




};

export default FarGalaxy;
