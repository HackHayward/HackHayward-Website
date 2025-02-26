import PropTypes from 'prop-types';

Card.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    pos: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
};

export default function Card(props) {
    return(
        <div className="card bg-white w-60 md:w-72">
            <figure>
                <img
                src={props.img}
                alt={props.name} 
                loading="lazy"
                />
            </figure>
            <div className="p-6 text-black font-grotesk">
                <h2 className="card-title md:text-xl font-bold text-balance">
                    {props.name}
                </h2>
                <h3 className="pt-3">
                    {props.desc}
                </h3>
                <h3>
                    {props.pos}
                </h3>
                {/* If no badge given, hide it */}
                {props.badge && 
                <div className="card-actions justify-end pt-3">
                    <div className="badge badge-outline">{props.badge}</div>
                </div>}
            </div>
        </div>
    );
}