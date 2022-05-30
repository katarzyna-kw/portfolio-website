import './styles.css'
import About from './About.component/About';
import Portfolio from './Portfolio/index';
import Skills from './Skills.component/Skills';
import Contact from './Contact.component/Contact';


function Body() {
  return (
    <div className="body" data-testid="Body">
      <About/>  
      <Portfolio/>
      <Skills />    
      <Contact />
  </div>
  );
}

export default Body;