function NavButtons() {
    return(
        <>
            <li className="px-2">
                <a href="#about" className="text-white text-xl font-['Roboto'] font-medium">
                    About
                </a>
            </li>
            <li className="px-2">
                <a href="#faq" className="text-white text-xl font-['Roboto'] font-medium">
                    FAQ
                </a>
            </li>
            <li className="px-2">
                <a href="#sponsor" className="text-white text-xl font-['Roboto'] font-medium">
                    Sponsor Us
                </a>
            </li>
        </>
    );
}
                        
export default function NavBar() {
    return(
        <>
            <div className="navbar lg:px-16 lg:pt-16 px-6 pt-6 fixed z-fix">
                {/* Logo */}
                <div className="max-lg:navbar-start ">
                    <a className="max-lg:h-20 max-sm:h-16">
                        <img
                            src="./assets/Monotone Logo.png"
                            alt="HackHayward logo"
                            className="h-full"
                        />
                    </a>
                </div>
                {/* Desktop Nav-Links */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-6">
                        <NavButtons />
                    </ul>
                </div>
                {/* Mobile Nav-Links */}
                <div className="max-lg:navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src="../../assets/hamburger_Icon.svg" alt="Menu" className="h-8 w-8"></img>
                        </div>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm menu-fix dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavButtons />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}