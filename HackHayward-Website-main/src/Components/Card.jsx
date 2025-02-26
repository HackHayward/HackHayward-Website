import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';

Card.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    pos: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    flair: PropTypes.shape({
        spk: PropTypes.bool,
        jud: PropTypes.bool,
        mnt: PropTypes.bool,
    }).isRequired,
};

export default function Card({ name, desc, pos, img, badge, flair }) {
    return(
        <div className="card bg-white w-60 md:w-72">
            <figure>
                <img
                src={img}
                alt={name} 
                loading="lazy"
                />
            </figure>
            <div className="p-6 text-black font-grotesk">
                <h2 className="card-title md:text-xl font-bold text-balance">
                    {name}
                    
                </h2>
                <div className='flex gap-1'>
                    {flair.jud &&
                        <div className="badge badge-secondary badge-info text-white">Judge</div>
                    }
                    {flair.spk &&
                        <div className="badge badge-secondary badge-warning text-white">Speaker</div>
                    }
                    {flair.mnt &&
                        <div className="badge badge-secondary badge-error text-white">Mentor</div>
                    }
                </div>
                <h3 className="pt-3">
                    {desc}
                </h3>
                <h3>
                    {pos}
                </h3>
                {/* If no badge given, hide it */}
                {badge && 
                <div className="card-actions justify-end pt-3">
                    <div className="badge badge-outline">{badge}</div>
                </div>}
            </div>
        </div>
    );
}