export default function AboutUs() {
    return (
        <>
            <div
                className="flex flex-col lg:flex-row text-white justify-between 
"
            >
                <div
                    className="lg:w-1/2 w-full p-4 flex flex-col gap-5 animate-fade-right
"
                >
                    <h1 className="text-5xl font-bold mb-4 text-center font-['Exo_2']">
                        About Us
                    </h1>
                    <p className="mb-4 lg:text-2xl font-['Space_Grotesk']">
                        HackHayward, hosted at California State University, East
                        Bay, is the first collegiate hackathon in the Hayward,
                        California area. We challenge students to work
                        collaboratively within a limited timeframe to ideate,
                        create, and pitch their solutions to tackle real-worldc
                        issues within a 24-hour timeframe. Our hackathon will be
                        hosted in person at California State University, East
                        Bay during Spring 2025, and we are expecting over 200
                        participants.
                    </p>
                </div>
                <div className="bg-[url('./assets/Scene2/s2Full.png')] bg-contain  bg-no-repeat lg:w-[30rem] lg:h-[30rem] w-full h-60 mt-4 lg:mt-0 lg:mr-56"></div>
            </div>
            <div
                className="flex flex-col lg:flex-row text-white  justify-between 
"
            >
                <div className="hidden md:block  bg-[url('./assets/Scene3/s3Full.png')] bg-contain bg-no-repeat lg:w-[30rem] lg:h-[30rem] w-full h-60 mt-4 lg:mt-0 lg:ml-48 "></div>
                <div className="lg:w-1/2 w-full p-4 font-['Roboto'] flex flex-col gap-5 animate-fade-left">
                    <h1 className="text-5xl font-bold mb-4 text-center font-['Exo_2']">
                        Our Mission
                    </h1>
                    <p className="lg:text-2xl font-['Space_Grotesk']">
                        Our mission is to empower underrepresented students
                        passionate about technology by providing hands-on
                        learning experiences, networking opportunities, and
                        innovative project development through hackathons. We
                        aim to pave the way for their success in the evolving
                        technological landscape by offering comprehensive skill
                        development and professional connections.
                    </p>
                </div>
                <div className="md:hidden bg-[url('./assets/Scene3/s3Full.png')] bg-contain bg-bottom bg-no-repeat lg:w-[30rem] lg:h-[30rem] w-full h-60 lg:mt-0"></div>
            </div>
        </>
    );
}
