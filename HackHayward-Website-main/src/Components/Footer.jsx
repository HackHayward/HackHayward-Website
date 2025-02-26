import PropTypes from 'prop-types';
import logo from '/src/assets/imgs/others/Monotone Logo.webp';
import ReactGA from 'react-ga4';

import {
    BiLogoDiscord,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
} from 'react-icons/bi';


Footer.propTypes = {
    register: PropTypes.string.isRequired,
};

function SocialButtons() {
    const links = [
        {
            icon: BiLogoDiscord,
            name: 'Discord',
            href: 'https://discord.com/invite/eMHWYfMKDd',
        },
        {
            icon: BiLogoInstagram,
            name: 'Instagram',
            href: 'https://www.instagram.com/hackhayward',
        },
        {
            icon: BiLogoLinkedinSquare,
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/hackhayward',
        },
    ];

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`${link.href}`}
                        target="_blank" 
                        aria-label={link.name}
                        className="text-white text-xl font-grotesk font-medium"
                    >
                        <link.icon className="h-12 w-auto" />
                    </a>
                </li>
            ))}
        </>
    );
}

function NavButtons() {
    const links = [{ text: 'About' }, { text: 'FAQ' }, { text: 'Meet the Teams' }, { text: 'Sponsor Us' }];

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`#${link.text.toLowerCase().replaceAll(' ', '-')}`}
                        className="text-white lg:text-lg text-sm font-grotesk
                         font-bold text-nowrap"
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </>
    );
}

export default function Footer(props) {
    const handleClick = (platform) => {
        ReactGA.event({
            category: 'hackathon',
            action: 'Click',
            label: platform,
        });
        console.log(`Google Analytics Event: ${platform} clicked`);
    };

    return (
        <footer className="bg-[#30252d] text-white">
            <section className="navbar p-8 place-content-between max-lg:flex-col ">
                {/* Logo */}
                <div className="max-lg:justify-center max-lg:pb-6">
                    <a
                        href="#home"
                        className="h-20 max-lg:h-16 max-sm:h-14 hover:scale-105 transition flex items-center"
                    >
                        <img
                            src={logo}
                            alt="HackHayward logo"
                            className="h-full"
                        />
                        <p className="text-white text-xl font-exo2 font-medium pl-6">
                            HackHayward
                        </p>
                    </a>
                </div>
                {/* Socials */}
                <nav className="flex flex-col lg:items-end">
                    {/* Email */}
                    <div className="pb-1">
                        <p className="lg:text-lg font-grotesk font-thin text-pretty text-white lg:text-end text-center">
                            Reach out to us at{' '}
                            <a
                                href="mailto:hacker@hackhayward.com
"
                                className="font-bold text-[#c593e9] underline"
                            >
                                hacker@hackhayward.com
                            </a>
                        </p>
                    </div>
                    {/* Icons */}
                    <ul className="menu-horizontal px-1">
                        <SocialButtons />
                    </ul>
                </nav>
            </section>
            <hr className="mx-8" />
            <section className="navbar p-8 place-content-between max-sm:flex-col">
                {/* Text */}
                <div className="lg:navbar-start">
                    <a
                        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        className="text-white lg:text-lg text-sm font-grotesk font-light max-sm:pb-6 underline	"
                        target="_blank"
                    >
                        MLH Code of Conduct
                    </a>
                </div>
                {/* Nav Buttons */}
                <nav className="flex flex-col items-end">
                    <ul className="menu-horizontal px-1 gap-2 max-[410px]:gap-0 font-extrabold whitespace-nowrap">
                        <NavButtons />
                        <li className="px-2 max-[310px]:px-0 lg:hover:scale-110 transition">
                            <a
                                href={props.register}
                                className="bg-[#c593e9] hover:bg-[#cfb0e8] rounded-full p-3 transition text-white lg:text-lg text-sm font-grotesk font-medium text-nowrap"
                                target="_blank"
                                onClick={() => handleClick('Register')}
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="flex justify-center bg-white text-black font-medium font-grotesk">
                <p className="flex flex-row gap-2">
                    Made with ❤️ by HackHayward
                </p>
            </section>
        </footer>
    );
}