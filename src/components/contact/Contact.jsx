import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pj9xvrw', 'template_fvsjo92', e.target, 'd5PfpFsisDtco3qUG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
      <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>11-4437-2532</h5>
          <a href="https://api.whatsapp.com/send?phone=541144372532" target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>ZequePrograma</h5>
          <a href="https://es-la.facebook.com/login/device-based/regular/login/"  target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>eze1506@live.com.ar</h5>
          <a href="mailto:eze1506@live.com.ar"  target='_blank'>Send a message</a>
        </article>
      </div>
      {/*END OF CONTACT OPTIONS */}
      <form  onSubmit={sendEmail}>
        <input type="text" name='name'  placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>      
      </form>
    </div>

    </section>
  )
}

export default Contact