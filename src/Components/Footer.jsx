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
            {links.map((link, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`#${link.href}`}
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
    const links = [{ text: 'About' }, { text: 'FAQ' }, { text: 'Sponsor Us' }];

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition">
                    <a
                        href={`#${link.text.toLowerCase().replace(' ', '-')}`}

                        className="text-white lg:text-lg text-sm"

                  

                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </>
    );
}

export default function Footer() {
    return (

        <>
        <footer className="bg-[#30252d] text-white max-w-screen-2xl mx-auto">
            <section className="navbar place-content-between max-lg:flex-col lg:px-16 px-6">
                {/* Logo */}
                <div className="w-full max-lg:justify-center lg:py-16 py-6">

      

                    <a
                        href="#home"
                        className="max-lg:h-20 max-sm:h-16 hover:scale-105 transition flex items-center"
                    >
                        <img
                            src="./assets/Monotone Logo.png"
                            alt="HackHayward logo"
                            className="h-full"
                        />

                        <p className="text-white text-xl font-exo2 font-bold pl-6">

             

                            HackHayward
                        </p>
                    </a>
                </div>
                {/* Socials */}

                <nav className="flex flex-col lg:items-end lg:py-16 pb-6">
                    {/* Email */}
                    <div className="pb-1">
                        <p className="lg:text-lg font-grotesk font-thin text-pretty text-white lg:text-end text-center">

               

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

                    <ul className="menu-horizontal px-1 pt-2">

                 

                        <SocialButtons />
                    </ul>
                </nav>
            </section>

            <hr className="lg:mx-16 mx-6"/>
            <section className="navbar p-8 place-content-between max-md:flex-col lg:px-16 px-6">
                {/* Text */}
                <div className="lg:navbar-start">
                    <p className="text-white lg:text-lg text-sm font-grotesk font-light max-md:pb-8">

          

                        MLH Code of Conduct
                    </p>
                </div>
                {/* Nav Buttons */}

                <nav className="flex flex-col items-end font-grotesk font-light text-nowrap">
                    <ul className="menu-horizontal px-1 gap-4 max-[410px]:gap-0">
                        <NavButtons />
                        <li className="pl-2 hover:scale-110 transition">
                            <a
                                href=""
                                className="bg-[#c593e9] hover:bg-[#cfb0e8] rounded-full p-3 px-6 transition text-white lg:text-lg text-sm"

              

                            >
                                Pre-Register
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>

        </footer>
        <section className="flex justify-center bg-white text-black font-bold font-grotesk">
                <p className="flex flex-row gap-2">
                    Made with
                    <img src="./assets/heart.png" alt="Red heart"/>
                    by HackHayward
                </p>
        </section>
        </>

          

    );
}
