import { useState } from "react";
import "./greeting.css";
import Popup from "./Popup";
function Greeting() {
  const [openPopup, setOpenPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  return (
    <div>
      <div className="main__greeting">
        <div className="support">
          <span className="App_support">
            App Support
            <br />
            <strong>1800-000-1234</strong>
          </span>
          <span className="call_icon">
            <img src="icon_call.png" alt="Call Now" />
          </span>
        </div>

        <div className="greeting">
          <img src="/logo_bilty.png" />
          <div className="message">
            {" "}
            <span id="comingsoon">
              COMING <span>SOON...</span>
            </span>
            <span>
              We are currenlty working on something fantastic.
              <br />
              We well be here soon. Subscribe to be notified
            </span>
            <button
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              NOTIFY ME
            </button>
          </div>
        </div>
        <div className=" pop">
          {openPopup && (
            <div className="popup">
              {" "}
              <Popup />
            </div>
          )}
        </div>
      </div>

      <footer>
        <div className="knowmore">
          <a href="http://aceappindustries.com">
            To know more about Bilty App..
          </a>
        </div>
        <footer className="d-flex justify-content-center align-items-center ">
          Copyright © 2010-2021 Bilty. All rights reserved.
        </footer>
      </footer>
    </div>
  );
}

export default Greeting;
