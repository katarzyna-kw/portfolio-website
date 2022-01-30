import './styles.css'
// import '../../theme.css'


function Contact() {
  return (
        <div id="contact">
            <h2>Contact Me</h2>
            <ul>
                <li className="icons">
                    <a href="mailto: katarzyna.koch@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope"></i>
                    </a>
                </li>
                <li className="icons">
                    <a href="https://github.com/katarzyna-kw/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                </li>
                <li className="icons">
                    <a href="https://www.linkedin.com/in/katarzyna-kw" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                </li>
            </ul>
        </div>
);
}

export default Contact;