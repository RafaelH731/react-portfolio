import React from 'react';

import * as Icon from 'react-bootstrap-icons'



export default function Contact() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div>
      <h1> Click Me!</h1>
      <div
      onClick={() => openInNewTab('https://github.com/RafaelH731')}>
      <Icon.FilePersonFill color="royalblue" size={205} />
      
      </div>

      <div
      onClick={() => openInNewTab('https://github.com/RafaelH731')}>
      <Icon.Github color="royalblue" size={205} />
      </div>

      <div
      onClick={() => openInNewTab('https://www.linkedin.com/in/rafael-herrera-016006238/')}>
      <Icon.Linkedin color="royalblue" size={205} />
      </div>

    </div>
  );
}
