import {
    BiLogoDiscord,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
} from 'react-icons/bi';

function SocialButtons() {
    const links = [
        { icon: BiLogoDiscord, href: '' },
        { icon: BiLogoInstagram, href: '' },
        { icon: BiLogoLinkedinSquare, href: '' },
    ];

    return (
        <>
            {links.map((links, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`#${links.href}`}
                        className="text-white text-xl font-['Space_Grotesk'] font-medium"
                    >
                        <links.icon className="h-12 w-auto" />
                    </a>
                </li>
            ))}
        </>
    );
}

function NavButtons() {
    const links = [{ text: 'About' }, { text: 'FAQ' }, { text: 'Sponsor Us' }];

    return (
        <>
            {links.map((links, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`#${links.text}`}
                        className="text-white lg:text-lg text-sm font-['Space_Grotesk'] font-light text-nowrap"
                    >
                        {links.text}
                    </a>
                </li>
            ))}
        </>
    );
}

export default function Footer() {
    return (
        <>
            <div className="navbar p-8 place-content-between">
                {/* Logo */}
                <div className="max-lg:navbar-start ">
                    <a
                        href="#home"
                        className="h-20 max-lg:h-16 max-sm:h-14 hover:scale-105 transition flex items-center"
                    >
                        <img
                            src="./assets/Monotone Logo.png"
                            alt="HackHayward logo"
                            className="h-full"
                        />
                        <p className="text-white text-xl font-['Exo_2'] font-medium pl-6 max-sm:hidden">
                            HackHayward
                        </p>
                    </a>
                </div>
                {/* Socials */}
                <div className="flex flex-col items-end">
                    {/* Email */}
                    <div className="pb-1">
                        <p className="lg:text-lg text-sm font-['Space_Grotesk'] font-thin text-pretty text-white text-end">
                            Reach out to us at{' '}
                            <a
                                href="mailto:hackhayward@gmail.com"
                                className="font-black text-[#c593e9]"
                            >
                                hackhayward@gmail.com
                            </a>
                        </p>
                    </div>
                    {/* Icons */}
                    <div>
                        <ul className="menu-horizontal px-1">
                            <SocialButtons />
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mx-8" />
            <div className="navbar p-8 place-content-between max-sm:flex-col">
                {/* Text */}
                <div className="lg:navbar-start ">
                    <p className="text-white lg:text-lg text-sm font-['Space_Grotesk'] font-light max-sm:pb-6">
                        MLH Code of Conduct
                    </p>
                </div>
                {/* Nav Buttons */}
                <div className="flex flex-col items-end">
                    <div>
                        <ul className="menu-horizontal px-1 gap-2">
                            <NavButtons />
                            <li className="px-2 lg:hover:scale-110 transition">
                                <a
                                    href=""
                                    className="bg-[#c593e9] hover:bg-[#cfb0e8] rounded-full p-3 transition text-white lg:text-lg text-sm font-['Space_Grotesk'] font-medium text-nowrap"
                                >
                                    Pre-Register
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white text-black font-medium font-['Space_Grotesk']">
                <p className="flex">Made with ❤ by HackHayward</p>
            </div>
        </>
    );
}
