import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { FaBehance } from 'react-icons/fa';
import emailjs from "emailjs-com";
import "./Contact.scss"
 
 export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'Portfolio Email', e.target, 'user_En5i4AyaVzjhZl7jEAOXp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    } 
    
    return (
        <div className="contact" id="contact">
          <div className="left">
            <img src="assets/email.svg" alt="" />
          </div>
          <div className="right">
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
              <input type="text" placeholder="Email" name="name"/> 
              <textarea placeholder="Message" name="email"></textarea>
              <button type="submit" name="message">Send</button>  
                <div className="icons">
                  <a href="https://www.linkedin.com/in/david-silva-3724221b0/">
                    <LinkedIn />
                  </a>
                  
                  <a href="https://github.com/jarbas77/" >
                  <GitHub />
                  </a>
                  
                  <a href="https://www.instagram.com/davidsilvacb94/">
                  <Instagram />
                  </a>
                  
                  <a href="https://www.behance.net/davidsilva94/">
                  <FaBehance />
                  </a>
                </div>
              <span>Thank you for your time!</span>
            </form>
          </div>
        </div>
      );
    }
 
