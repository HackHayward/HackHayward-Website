function FaqAccordion() {
    const faqs = [
        { question: 'What is Hackathon?', answer: 'hello world!' },
        { question: 'How long is HackHayward?', answer: 'hello world!' },
        { question: 'Who can attend HackHayward?', answer: 'hello world!' },
        { question: 'Do I need to have a team?', answer: 'hello world!' },
        { question: 'How much experience do I need?', answer: 'hello world!' },
    ];

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4 font-['Roboto']">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="collapse collapse-plus max-w-screen-md bg-white text-black"
                >
                    <input type="checkbox" />
                    <div className="collapse-title md:text-xl font-bold text-balance">
                        {faq.question}
                    </div>
                    <div className="collapse-content text-pretty">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function FQA() {
    return (
        <>
            <div className="text-white text-center font-['Exo_2'] flex flex-col gap-9 z-10">
                <h1 className="hidden md:block text-5xl text-balance max-lg:mx-28 font-bold">
                    FREQUENTLY ASKED QUESTIONS
                </h1>
                <h1 className="md:hidden text-5xl max-[340px]:text-4xl font-bold">
                    FAQ
                </h1>
                <p className="lg:text-xl sm:text-lg font-['Roboto'] font-light text-pretty">
                    If we missed anything, please contact us at{' '}
                    <a href="hackhayward@gmail.com" className="font-bold">
                        hackhayward@gmail.com
                    </a>
                </p>
            </div>
            <FaqAccordion />
        </>
    );
}
