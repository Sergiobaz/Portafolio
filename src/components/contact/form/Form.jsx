"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./form.module.css"


const Form = ({dictionary}) => {
    const form = useRef();

    const YOUR_SERVICE_ID = "service_talagda"
    const YOUR_TEMPLATE_ID = "template_b4h4qcl"
    const YOUR_PUBLIC_KEY = "3tFsMS_tyKDieLlJg"

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    
  return (
    <form id='form' ref={form} onSubmit={sendEmail} className={styles.field} >
      <label>{dictionary.contact.name}</label>
      <input className={styles.input} type="text" name="user_name" />
      <label>Email</label>
      <input className={styles.input} type="email" name="user_email" />
      <label>{dictionary.contact.message}</label>
      <textarea name="message" />
      <input className={styles.input} type="submit" value={dictionary.contact.submit} />
    </form>
  )
}
export default Form