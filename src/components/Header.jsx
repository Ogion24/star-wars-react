import Nav from "./Nav.jsx";

const Header = ({changePage}) => {
    return (
        <header className="rounded-top-5">
            <Nav changePage={changePage}/>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>


    );
};

export default Header;