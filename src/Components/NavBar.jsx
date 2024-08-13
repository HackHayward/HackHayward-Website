function NavButtons() {
    const links = [
        { text: 'About' },
        { text: 'FAQ' },
        { text: 'Sponsor Us' }
    ];

    return (
        <>
            {links.map((links, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`#${links.text}`}
                        className="text-white text-xl font-['Roboto'] font-medium"
                    >
                        {links.text}
                    </a>
                </li>
            ))}
        </>
    );
}

export default function NavBar() {
    return (
        <>
            <div
                className="navbar lg:px-16 lg:pt-16 px-6 pt-6 absolute z-fix-100 animate-fade-right
"
            >
                {/* Logo */}
                <div className="max-lg:navbar-start ">
                    <a
                        href="#home"
                        className="max-lg:h-20 max-sm:h-16 hover:scale-110 transition"
                    >
                        <img
                            src="./assets/Monotone Logo.png"
                            alt="HackHayward logo"
                            className="h-full"
                        />
                    </a>
                </div>
                {/* Desktop Nav-Links */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-9 menu-horizontal pl-10">
                        <NavButtons />
                    </ul>
                </div>
                {/* Mobile Nav-Links */}
                <div className="max-lg:navbar-end">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:rotate-90"
                        >
                            <img
                                src="../../assets/hamburger_Icon.svg"
                                alt="Menu"
                                className="h-8 w-8"
                            ></img>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm menu-fix dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <NavButtons />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
