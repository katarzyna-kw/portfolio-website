import contactLinks from './ContactData.js'
import '../styles.css'


function Contact() {
  return (
        <div id="contact">
            <h2>Contact Me</h2>
            <ul>
              {contactLinks.map((item) => (
                <li key={item.link} className="icons">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
            </ul>
        </div>
);
}

export default Contact;