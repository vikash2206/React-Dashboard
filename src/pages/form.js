import React from 'react';

import './Form.css';

const Form = ({ submitForm }) => {
  return (
   <div>


      <form>
        <label>
        fullname
        </label><br/>
        <input type="text"/> <br/>
        <label>
        email
        </label><br/>
        <input type="email"/> <br/>
        <label><br/>
        mobile numer
        </label><br/>
        <input type="number"/> <br/>

        <label>
        Message
        </label><br/>
        <textarea/> <br/>

        <input type="submit" value="Submit"/>
      </form>


    </div>


    
  );
};

export default Form
