function FaqAccordion() {
    const faqs = [
        {
            question: 'What is a Hackathon?',
            answer: 'A hackathon is an event...',
        },
        {
            question: 'How long is HackHayward?',
            answer: 'HackHayward lasts for 24 hours.',
        },
        {
            question: 'Who can attend HackHayward?',
            answer: 'Any student can attend.',
        },
        {
            question: 'Do I need to have a team?',
            answer: 'You can join as an individual or as a team.',
        },
        {
            question: 'How much experience do I need?',
            answer: 'No experience is required.',
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
                            className="font-bold text-[#c593e9]"
                        >
                            hackhayward@gmail.com
                        </a>
                    </p>
                </div>
                <FaqAccordion />
                <div className="opacity-50 absolute top-0 right-[-10%] max-h-[18%] max-w-[18%]">
                    <img
                        src="../assets/Background/Jupiter.png"
                        className="object-cover"
                    />
                </div>
            </div>
        </>
    );
}
