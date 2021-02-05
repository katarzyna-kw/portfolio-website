import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {      
    render() {  
        return (  
            <div>  
                <div className='container-fluid' >  
                    <Carousel>
                        <Carousel.Item style={{'width':"100%"}} >
                            <a href="https://github.com/katarzyna-kw/election-map-project" target="_blank" rel="noreferrer">
                                <img style={{'width':"100%"}}  className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-election-map.png?raw=true'} alt="Screencapture of election map coded with javascript" />
                            </a> 
                            <Carousel.Caption>  
                                <h4>Election map coded with Javascript given html and css code // Skillcrush project</h4>
                            </Carousel.Caption>  
                    </Carousel.Item  >  
                        <Carousel.Item style={{'width':"100%"}}>  
                            <img style={{'width':"100%"}} className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-quote-generator.png?raw=true'} alt="Screencapture of quote generator coded with javascript" />  
                            <Carousel.Caption>  
                                <h4>Quote generator coded with Javascript</h4>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'width':"100%"}}>  
                            <img style={{'width':"100%"}}  className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-cat-clock.png?raw=true'} alt="Screencapture of clock coded with javascript"  />
                            <Carousel.Caption>  
                                <h3>Clock generator coded with Javascript</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>
                        <Carousel.Item style={{'width':"100%"}}>  
                            <img style={{'width':"100%"}}  className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-survey.png?raw=true'} alt="Screencapture of survey form coded with HTML and CSS"  />
                            <Carousel.Caption>  
                                <h3>Responsive mock survey form coded with HTML and CSS // freecodecamp project</h3>  
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'width':"100%"}}>  
                            <img style={{'width':"100%"}}  className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-school-website.png?raw=true'} alt="Screencapture of school website"  />
                            <Carousel.Caption>  
                                <h3>Responsive mock school website for Polish school coded with HTML and CSS // freecodecamp project</h3>  
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'width':"100%"}}>  
                            <img style={{'width':"100%"}}  className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-technical-documentation.png?raw=true'} alt="Screencapture of technical documentation site coded with HTML and CSS"  />
                            <Carousel.Caption>  
                                <h3>Responsive mock technical documentation website coded with HTML, CSS, and Javascript // freecodecamp project</h3>  
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{'width':"100%"}}>  
                            <img style={{'width':"100%"}}  className="d-block w-100"  src={'https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-stretching-routine.png?raw=true'} alt="Screencapture of stretching routine site"  />
                            <Carousel.Caption> 
                                <h3>Stretching routine website coded with HTML and CSS</h3>  
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>  
                </div>  
            </div>  
                )  
        }
}  

export default BootstrapCarousel  
