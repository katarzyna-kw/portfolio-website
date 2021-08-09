import { data } from './SwiperData'

export const SwiperCard = ( {project} ) => {
    return (
    <div className="cardWrapper">
        <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/${project.imageid}`} alt='screencapture' />
        <div className="cardTextWrapper">
            <h3>{project.name} <span>/// Built using {project.languages}</span></h3>
            <p>{project.description}</p>
            <div className="cardLinks"><a href={`${card.project}`} target="_blank" rel="noreferrer">Live link</a></div>
            <div className="cardLinks"><a href={`https://github.com/katarzyna-kw/${project.repo}`} target="_blank" rel="noreferrer">Github repo</a></div>

        </div>
    </div>
    );
}