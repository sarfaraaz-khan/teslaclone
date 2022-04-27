import { useState } from "react";
import "./greeting.css";

function Popup() {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div>
      {!isSubmit ? (
        <form>
          <label for="fname"> Name</label>
          <input type="text" id="fname" name="text" placeholder="Name"></input>

          <label for="email">Email Address</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />

          <label for="phone">Phone Number</label>

          <input
            type="tel"
            id="phone"
            name="number"
            placeholder="Phone Number"
          />

          <button onClick={() => setIsSubmit(true)}>Submit</button>
        </form>
      ) : (
        <form className="lastmsg">
          <h1>
            Thanks for submitting your response
            <br />
          </h1>
          <span> you will get notified when we get on the road</span>
        </form>
      )}
    </div>
  );
}

export default Popup;
