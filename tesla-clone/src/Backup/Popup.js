import "./Greeting";

function Popup() {
  // const [mobile, setMobile] = useState("");
  // const [isError, setIsError] = useState(false);

  return (
    <div>
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

        <input type="tel" id="phone" name="number" placeholder="Phone Number" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Popup;
