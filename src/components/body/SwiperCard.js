export const SwiperCard = ( {project} ) => {

    const username = "katarzyna-kw";

    
    return (
    <div>
        {/* <button onClick={fetchProjects}>click me</button> */}
        <img src={`https://raw.githubusercontent.com/katarzyna-kw/my-website/main/public/${project.imageid}`} alt='screencapture' />
        <div style={{ fontWeight: 'bold' }}>{project.name}</div>
        <div>{project.description}</div>
        <div>{project.languages}</div>
        <div>{project.html_url}</div>
    </div>
    )
}