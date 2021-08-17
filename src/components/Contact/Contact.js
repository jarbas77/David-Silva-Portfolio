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
              <span></span>
            </form>
          </div>
        </div>
      );
    }
 
