//import logo from './logo.svg';
//import headerImg from './header_img.jpeg'
//import './App.css';
import * as React from "react";
{/* NAVIGATION */}
function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}
{/* HEADER */}
function Header() {
  return (
    <header className="App-header">
      {/* <img src={headerImg} className="jumbotron" alt="header-img" /> */}
      <h1>
        Eventonica 
      </h1>
      <p>Event Recommender</p>
      <Nav></Nav>
    </header>
  );
}
function SayHello() {
  const [name, setName] = React.useState(null);
  const onChange = ({ currentTarget: { value } }) => setName(value);
  return (
    <section>
    <h2>Hello</h2>
        <label>What is your name?</label>
        <input type="text"
          name="name"
          value={name} 
          onChange={onChange}
        />
      {/*<input type="submit" value="Submit" onClick={onChange} /> */}
      {/* how to use if else statement? */}
        <GreetUser name={name} />
      </section>
  );
}
function GreetUser(props) {
  const { name } = props;
  return <h4>Welcome, {name}!</h4>
}

function Signup() {
  const [username, setUsername] = React.useState(null);
  const [fname, setFname] = React.useState(null);
  const [lname, setLname] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  {/* how to make this work? */ }
  const onChange = ({ currentTarget: { value } }) => {
    setUsername(value);
    setFname(value);
    setLname(value);
    setEmail(value);
  };
  
  const usernameRef = React.useRef();
  const fnameRef = React.useRef();
  const lnameRef = React.useRef();
  const emailRef = React.useRef();

  const handleSubmit = event => {
    event.preventDefault();
    console.log('USER FORM:', "Username:", usernameRef.current.value, ", First Name:", fnameRef.current.value, ", Last Name:", lnameRef.current.value, ", email:", emailRef.current.value)
  }
  return (
    <section>
      <h2>Sign Up:</h2>
      <form id="add-user" onSubmit={handleSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" id="add-username"
            name="username"
            value={username} 
            ref={usernameRef}
          />
        </fieldset>
        <fieldset>
          <label for="fname">First name:</label>
          <input type="text"
            id="fname"
            name="fname"
            value={fname}
            ref={fnameRef}
            />
        </fieldset>
        <fieldset>
          <label for="lname">Last name:</label>
          <input type="text"
            id="lname"
            name="lname"
            value={lname}
            ref={lnameRef}/>
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="text"
            id="email"
            name="email"
            value={email}
            ref={emailRef}/>
        </fieldset>
        <input type="submit" value="Register" />
      </form>
      {/*<ShowUser username={username} fname={fname} lname={lname} email={email}  />*/}
    </section>
  );
}
{/*function ShowUser(props) {
  const { username, fname, lname, email } = props;
  return <p>User info: username: {username}, First Name: {fname}, Last Name: {lname}, email: {email}</p>
}*/}
{/* Events */}
function Events() {
  return (
    <section>
      <h2>Events</h2>
      <ul id="all-events">
        <li>HIM - concert - UCT - 05-12-2021 - 12:00 PM - 55</li>
        <li>POD - concert - UCT - 10-21-2021 - 18:00 PM - 55</li>
      </ul>
    </section>
  );
}
{/* ADD EVENT FORM */}
function AddEventForm() {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('You have submitted the form.')
  }
  return (
    <section>
      <h2>Add Event</h2>
      <form id="add-event" onSubmit={handleSubmit} >
        <fieldset>
          <label>Name:</label>
          <input
            type="text" name="name"
            id="add-event-name"
            placeholder="Event Name"
          />
        </fieldset>
        <fieldset>
          <label for="event-category">Category:</label>
          <input
          type="text" name="category"
          id="event-category" 
          placeholder="Event Category"
          />
        </fieldset>
        <fieldset>
          <label for="event-location">Location:</label>
          <input
          type="text" name="location"
          id="event-location" 
          placeholder="Location"
          />
        </fieldset>
        <fieldset>
          <label for="event-date">Date:</label>
          <input
          type="text" name="date"
          id="event-date" 
          placeholder="MM-DD-YYYY"
          />
        </fieldset>
        <fieldset>
          <label for="event-time">Time:</label>
          <input
          type="text" name="time"
          id="event-time" 
          placeholder="HH-MM"
          />
        </fieldset>
        <fieldset>
          <label for="event-price">Price:</label>
          <input
          type="text" name="price"
          id="event-price" 
          placeholder="0.00"
          />
        </fieldset>
        <input type="submit" value="Add Event"/>
      </form>
    </section>
  );
}
function App() {
  const [apiResponse, setAPIResponse] = React.useState("");
  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setAPIResponse(res))
      .catch(err => err);
  };
  React.useEffect(() => {
    callAPI();
  });
  return (
    <div className="container">
    <p className="App-intro">{apiResponse}</p>
      <Header />
      <SayHello />
      <Signup />
      <main>
        <Events />
        <AddEventForm />
      </main>
    </div>
  );
}

export default App;
