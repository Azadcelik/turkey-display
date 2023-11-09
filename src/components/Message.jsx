import { useEffect, useState } from "react";
import App from '../App.jsx'

const [message, setMessage] = useState('');

function Message({ size }) {

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])


  useEffect (() => {
    console.log('Message', size)
   },[size])

   return (
    <div className={`message ${size}`}>
      {message}
    </div>
  );
}

export default Message;
