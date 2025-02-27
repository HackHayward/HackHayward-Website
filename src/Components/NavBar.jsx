import MLH from './MLH';
import logo from '/src/assets/imgs/others/Monotone Logo.webp';
import hamburger from '/src/assets/imgs/others/hamburger_Icon.svg';

function NavButtons() {
    const links = [{ text: 'About' }, { text: 'FAQ' }, { text: 'Teams' }, { text: 'Sponsors' }];

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition ">
                    <a
                        href={`#${link.text.toLowerCase().replaceAll(' ', '-')}`}
                        className="text-white text-xl font-['Roboto'] font-medium"
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </>
    );
}

export default function NavBar() {
    return (
        <>
            <nav className="navbar absolute z-[9999] lg:p-10 ">
                <div className="max-lg:flex-1">
                    <a
                        href="#home"
                        className="max-lg:h-20 max-sm:h-16 hover:scale-110 transition"
                    >
                        <img
                            src={logo}
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
                <div className="flex-none">
                    <div className="dropdown dropdown-end shadow-drop-sm">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:rotate-90"
                        >
                            <div className="indicator">
                                <img
                                    src={hamburger}
                                    alt="Menu"
                                    className="h-8 w-8"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm menu-fix dropdown-content bg-[#261e24] rounded-box z-[100] mt-3 w-52 p-2 shadow "
                        >
                            <NavButtons />
                        </ul>
                    </div>
                </div>
                <MLH />
            </nav>
        </>
    );
}
