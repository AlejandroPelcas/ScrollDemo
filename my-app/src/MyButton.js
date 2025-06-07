// MyButton.js
import React from 'react';

function MyButton() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return <button
  style={{
    backgroundColor: '#4CAF50', // green
    border: 'none',
    color: 'white',
    padding: '10px 24px',
    textAlign: 'center',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  }}
>
  Click Me
</button>

}

export default MyButton;
