import React from 'react';
import profilePic from "./img/profile-pic.webp"


export default function Home() {
  return (
    <div>
      <h1>Rafael Herrera
      </h1>
      <img src={profilePic} alt="headshot" />;
      <p>
        My name is Rafael Herrera and I am future programmer who has recently started a
        coding bootcamp through the University of Washington. I have recently been working with a
        non-profit organization that serves lower income families in the Yakima Valley.
      </p>
    </div>
  );
}
