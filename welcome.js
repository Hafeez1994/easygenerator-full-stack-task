import React, { useEffect, useState } from 'react';

export default function Welcome() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/welcome', {
      headers: { Authorization: token },
    })
      .then((res) => res.text())
      .then((msg) => setMessage(msg))
      .catch((err) => console.error(err));
  }, []);

  return <div>{message}</div>;
}