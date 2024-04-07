import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    /* Uncomment for emailjs integration
    emailjs
      .sendForm('service_gxer3uh', 'template_7f0c2tt', form.current, {
        publicKey: 'R43QPdn5Da1UbIwft',
      })
      .then(
        () => {
          setEmailStatus('success');
        },
        (error) => {
          setEmailStatus('error');
          console.log('FAILED...', error.text);
        },
      );*/
    
     setEmailStatus('success');
  };

  if (emailStatus === 'success') {
    return <div style={{textAlign: 'center'}}>Your message has been sent successfully!</div>;
  } else if (emailStatus === 'error') {
    return <div>Failed to send the message. Please try again later.</div>;
  }

  return (
    <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>HMU</h2>
      <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <label>
          Name
          <input type="text" name="user_name" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </label>
        <label>
          Your Email
          <input type="email" name="user_email" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </label>
        <label>
          Message
          <textarea name="message" style={{ width: '100%', height: '150px', padding: '10px', marginTop: '5px' }} />
        </label>
        <input type="submit" value="Send" style={{ cursor: 'pointer', padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }} />
      </form>
    </div>
  );
};