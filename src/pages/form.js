import React from 'react';

import './Form.css';

const Form = ({ submitForm }) => {
  return (
   <div>

  <h1 className="text-center user-profile">User Profile</h1>


      <form>  
        <label>
        fullname
        </label><br/>
        <input type="text"/> <br/>
        <label>
        email
        </label><br/>
        <input type="email"/> <br/>
        <label>
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
