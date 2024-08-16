export default function AboutUs() {
    return (
        <>
            <section className="grid xl:grid-cols-2 items-center justify-items-center lg:gap-4 gap-12 text-white max-w-screen-2xl mx-auto">
                <article className="animate-fade-right ">
                    <h2 className="text-5xl max-[340px]:text-4xl font-bold font-exo2 text-center mb-9">
                        About Us
                    </h2>
                    <p className="lg:text-xl lg:px-28  sm:text-lg font-grotesk text-pretty ">
                        HackHayward, hosted at California State University, East
                        Bay, is the first collegiate hackathon in the Hayward,
                        California area. We challenge students to work
                        collaboratively within a limited timeframe to ideate,
                        create, and pitch their solutions to tackle real-world
                        issues within a 24-hour timeframe. Our hackathon will be
                        hosted in person at California State University, East
                        Bay during Spring 2025, and we are expecting over 200
                        participants.
                    </p>
                </article>
                <div className="z-20">
                    <img
                        src="./assets/Scene2/s2Full.png"
                        className="rounded-md shadow-lg"
                    />
                </div>
                <div className="opacity-50 absolute top-[10%] right-[-10%] h-[20%] w-[20%]">
                    <img
                        src="../assets/Background/Uranus.png"
                        className="object-cover"
                    />
                </div>
            </section>
            <section className="grid xl:grid-cols-2 items-center justify-items-center lg:gap-4 gap-12 text-white mt-20 max-w-screen-2xl mx-auto">
                <div className="">
                    <img
                        src="./assets/Scene3/s3Full.png"
                        className="rounded-2xl shadow-lg "
                    />
                </div>
                <article className="animate-fade-left row-start-1 row-end-2 xl:col-start-2 xl:col-end-3">
                    <h2 className="text-5xl max-[340px]:text-4xl font-bold font-exo2 text-center mb-9">
                        Our Mission
                    </h2>
                    <p className="lg:text-xl lg:px-28 sm:text-lg font-grotesk text-pretty ">
                        Our mission is to empower underrepresented students
                        passionate about technology by providing hands-on
                        learning experiences, networking opportunities, and
                        innovative project development through hackathons. We
                        aim to pave the way for their success in the evolving
                        technological landscape by offering comprehensive skill
                        development and professional connections.
                    </p>
                </article>
                <div className="opacity-50 absolute bottom-[20%] left-[-20%] max-h-[40%] max-w-[40%]">
                    <img
                        src="../assets/Background/Saturn.png"
                        className="object-cover"
                    />
                </div>
            </section>
        </>
    );
}
