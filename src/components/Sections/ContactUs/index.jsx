import React from 'react';
import TextInput from '../../TextInput';
import Button from '../../Button';
import contactUs from '../../../assets/images/contact-us.svg';
import './index.css';


const ContactUs = () => {
  const fields = [
    {
      label: 'Seu nome',
      id: 'name',
      type: 'text',
    },
    {
      label: 'Seu e-mail',
      id: 'email',
      type: 'text',
    },
    {
      label: 'Seu telefone',
      id: 'phone',
      type: 'tel',
    },
    {
      label: 'Título da mensagem',
      id: 'message-title',
      type: 'text',
    },
  ];

  const handleClick = () => {
    const form = document.getElementById('contactus-form');
    form.submit()
  }

  return (
    <section className="section contactus-section" id="contact-us">
      <form
        className="contactus-form"
        id="contactus-form"
        method="POST"
        target="_blank"
        action="https://getform.io/f/09a5f7b2-3d8d-48b9-a6f7-55b849b8c51c"
      >
        <h2>Fale conosco</h2>
        {fields.map((field, index) => (
          <TextInput
            key={index}
            label={field.label}
            type={field.type}
            id={field.id}
          />
        ))}
        <label htmlFor="message">Escreva sua mensagem</label>
        <textarea className="textarea-input" id="message" name="message" rows="6">
        </textarea>
        <div
          className="flex-row"
          id="send-email-button"
          style={{
            width: '100%',
            justifyContent: 'flex-end',
            margin: '10px 0'
          }}
          >
          <Button title="Enviar e-email" bgColor="#16DBC6" handleClick={handleClick} />
        </div>
      </form>
      <div className="contact-us-image-container">
        <img src={contactUs} alt="contact-us" height="550" />
      </div>
    </section>
  )
}

export default ContactUs;
