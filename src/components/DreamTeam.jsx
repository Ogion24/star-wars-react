import Friend from "./Friend.jsx";
import {friendsphoto} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 my-1 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream team</h2>
            {friendsphoto.map((friend, index) => (
                <Friend key = {index}
                        friend={friend}
                        pos = {index + 1}/>
            ))}
        </section>
    );
};

export default DreamTeam;