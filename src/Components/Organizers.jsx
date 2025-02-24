import Card from "./Card.jsx";
import PropTypes from 'prop-types';
import saturn from '/src/assets/imgs/Background/Saturn.webp';

Organizers.propTypes = {
    title: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            pos: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            badge: PropTypes.string,
        })
    ).isRequired,
};

export default function Organizers({ title, users }) {
    return (
        <div className="relative flex justify-center">
            <section className="flex flex-col items-center justify-items-center gap-10 text-white max-w-screen-lg z-10">
                <div className="text-white text-center font-exo2 flex flex-col gap-9">
                    <h2 className="text-5xl text-balance font-bold shadow-text-sm">
                        {title}
                    </h2>
                </div>

                {/* List all organizers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {users.map((organizer, index) => (
                        <li key={index} className="list-none">
                            <Card 
                                name={organizer.name}
                                desc={organizer.desc}
                                pos={organizer.pos}
                                img={organizer.img}
                                badge={organizer.badge}
                            />
                        </li>
                    ))}
                </div>
            </section>
            {title == "Meet the Team" && 
            <div className="opacity-50 absolute top-[80%] right-[-10%] max-h-[40%] max-w-[40%] ">
                <img src={saturn} loading="lazy" alt="Saturn" className="object-cover" />
            </div>}
        </div>
    );
}
