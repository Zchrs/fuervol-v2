import React from 'react';
import './css/contact.css';


const Contact = () => {
    return (
        <aside id='contact'>
              <p className='emails'>info@fuervolfundacion.org</p>
      <h1>Contáctanos</h1>
      <div className='contactIcons'>
        <ul>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
        </ul>
      </div>
      <hr className='contactLines'/>
      <form
        action="https://formsubmit.co/565dd2d8fc10a2a9c2057d055df2306c"
        method="post">
        <label>Nombre:</label>
        <input type="text" name="name" id="name_form" required />
        <label>Apellido:</label>
        <input type="text" name="surname" id="surname_form" required />
        <label>Empresa:</label>
        <input type="text" name="company" id="company_form" required />
        <label>Correo:</label>
        <input type="email" name="email" id="email_form" required />
        <label>Teléfono:</label>
        <input type="number" name="phone" id="cel_form" required />
        <label>Mensaje:</label>
        <textarea
          name="message"
          id="formMessage"
          cols="30"
          rows="10"
          required>
        </textarea>
        <div className="contain-buttons">
        <button className='button' type="submit">Enviar</button>
        <button className='button2' type="reset">Limpiar</button>
        </div>
        <input type="hidden" name="_next" value="http://fuervolfundacion.org" />
      </form>
      <div className='articleFooter'>
        <ul>
          <li>
            <i>
            (57)3243806422
            </i>
            
          </li>
          <li>
            <i>
            (57)3243806422
            </i>
          </li>
        </ul>
      </div>
    </aside>
    );
};

export default Contact;