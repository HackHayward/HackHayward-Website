export default function FaqCollapse() {
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
                    className="collapse collapse-plus lg:w-1/2 bg-[#ffffff] text-black"
                >
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        {faq.question}
                    </div>
                    <div className="collapse-content">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
