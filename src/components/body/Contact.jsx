import './styles.css'

function Contact() {
  return (
        <div id="contact">
            <h2>Contact Me</h2>
            <ul>
                <li class="icons">
                    <a href="mailto: katarzyna.koch@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-envelope"></i>
                    </a>
                </li>
                <li class="icons">
                    <a href="https://github.com/katarzyna-kw/" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-github"></i>
                    </a>
                </li>
                <li class="icons">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                </li>
            </ul>
        </div>
);
}

export default Contact;