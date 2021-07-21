export const SwiperCard = ( {card} ) => {
    return (
    <div className="cardWrapper">
        <img src={`https://raw.githubusercontent.com/katarzyna-kw/my-website/main/public/${card.imageid}`} alt='screencapture' />
        <div style={{ fontWeight: 'bold' }}>{card.name}</div>
        <div>{card.description}</div>
        <div>{card.languages}</div>
        <div>{card.html_url}</div>
    </div>
    );
}