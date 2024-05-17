const Navbar = () => {
    return (
        <nav>
            <ul className="list-none m-0 p-0 border-b border-white">
                <li className="inline-block p-5"><a href="/">Home</a></li>
                <li className="inline-block p-5"><a href="post">Post</a></li>
                <li className="inline-block p-5 float-right"><a href="about">About</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;