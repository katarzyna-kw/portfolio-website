export const SwiperCard = ( {card} ) => {
    return (
    <div className="cardWrapper">
        <img src={`https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/img/portfolio/${card.imageid}`} alt='screencapture' />
        <div className="cardTextWrapper">
            <h3>{card.name} <span>/// Built using {card.languages}</span></h3>
            <p>{card.description}</p>
            <div class="cardLinks"><a href={`https://katarzyna-kw.github.io/${card.link}`} target="_blank" rel="noreferrer">Live link</a></div>
            <div class="cardLinks"><a href={`https://github.com/katarzyna-kw/${card.repo}`} target="_blank" rel="noreferrer">Github repo</a></div>
        </div>
    </div>
    );
}