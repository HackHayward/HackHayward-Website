function FaqAccordion() {
    const faqs = [
        {
            question: 'Who’s allowed to sign up?',
            answer: 'Anyone who is in college/university or recent graduates aged 18 and up are invited to sign up!',
        },
        {
            question: 'How do I sign up?',
            answer: 'Fill in our pre-registration form and get informed when we open registration!',
        },
        {
            question: 'How long will HackHayward last?',
            answer: 'We will be hacking over 2 days! Plenty of time to work on your project and join many of our workshops.',
        },
        {
            question: 'What does it cost to join?',
            answer: 'Nothing! HackHayward is a free event. Everyone is invited!',
        },
        {
            question: 'Are teams required?',
            answer: 'They are encouraged not mandatory. Team up, find friends, make the best of this event!',
        },
        {
            question: 'What can be submitted?',
            answer: 'Any projects, technical or not, created within the 2 days of Hacking can be submitted!',
        },
        {
            question: 'What do I need to bring to the event?',
            answer: 'Picture ID, clothing (if you plan on staying over), water bottle, personal devices (laptop or PC), and chargers!',
        },
        {
            question: 'What if I have no experience?',
            answer: 'This event is still for you! No technical experience or not majoring in Computer Science? You are still invited! Create creative solutions to the problems in the Hackathon!',
        },
        {
            question: 'What is HackHayward?',
            answer: 'The first hackathon in Hayward, organized by CSU East Bay Students for all students in the Bay Area due to take place this coming Spring! Aimed towards spreading awareness for marginalized communities, we are open to everyone!',
        },
        {
            question: 'Who are the organizers?',
            answer: 'Our team is 100% CSU East Bay Students, learn more here!',
        },
        {
            question: 'Where will the Hackathon take place?',
            answer: 'We are taking place in Hayward, CA. ',
        },
    ];

    return (
        <section className="w-full flex flex-col justify-center items-center gap-4 font-grotesk mt-6">
            {faqs.map((faq, index) => (
                <article
                    key={index}
                    className="collapse collapse-plus max-w-screen-md bg-white text-black z-10"
                >
                    <input type="checkbox" />
                    <h2 className="collapse-title md:text-xl font-bold text-balance">
                        {faq.question}
                    </h2>
                    <div className="collapse-content text-pretty">
                        <p>{faq.answer}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default function FAQ() {
    return (
        <>
            <div className="relative">
                <div className="text-white text-center font-exo2 flex flex-col gap-9 z-10">
                    <h2 className="hidden md:block text-5xl text-balance max-lg:mx-28 font-bold">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <p className="md:hidden text-5xl max-[340px]:text-4xl font-bold">
                        FAQ
                    </p>
                    <p className="lg:text-xl sm:text-lg font-grotesk font-light text-pretty">
                        If we missed anything, please contact us at{' '}
                        <a
                            href="mailto:hackhayward@gmail.com"
                            className="font-bold text-[#c593e9] underline"
                        >
                            hackhayward@gmail.com
                        </a>
                    </p>
                </div>
                <FaqAccordion />
                <div className="opacity-50 absolute top-0 right-[-10%] max-h-[40%] max-w-[40%] ">
                    <img
                        src="../assets/Background/Saturn.png"
                        className="object-cover"
                    />
                </div>
            </div>
        </>
    );
}
