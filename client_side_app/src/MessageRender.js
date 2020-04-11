import React from 'react';
import './App.css';

function MessageRender() {
  return (
    <div className="App">
      <MessageFunc/>
    </div>
  );
}


function MessageFunc(){
  return(
    <div className="messages">
      test
    </div>
  )
}

export default MessageRender;
