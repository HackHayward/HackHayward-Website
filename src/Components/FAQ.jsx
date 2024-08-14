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
        <section className="w-full flex flex-col justify-center items-center gap-4 font-grotesk">
            {faqs.map((faq, index) => (
                <article
                    key={index}
                    className="collapse collapse-plus max-w-screen-md bg-white text-black"
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

export default function FQA() {
    return (
        <>
            <header className="text-white text-center font-exo2 flex flex-col gap-9 z-10">
                <h1 className="hidden md:block text-5xl text-balance max-lg:mx-28 font-bold">
                    FREQUENTLY ASKED QUESTIONS
                </h1>
                <h1 className="md:hidden text-5xl max-[340px]:text-4xl font-bold">
                    FAQ
                </h1>
                <p className="lg:text-xl sm:text-lg font-grotesk font-light text-pretty">
                    If we missed anything, please contact us at{' '}
                    <a
                        href="mailto:hackhayward@gmail.com"
                        className="font-bold text-[#c593e9]"
                    >
                        hackhayward@gmail.com
                    </a>
                </p>
            </header>
            <FaqAccordion />
        </>
    );
}
