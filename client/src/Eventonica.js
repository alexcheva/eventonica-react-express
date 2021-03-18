{/* NAVIGATION */}
function Nav() {
  return (
    <nav>
      <ul>
        {/* if logged in/user_id is defined */}
        <li>Sign in</li>
        <li>Login</li>
        {/* else */}
        {/*
        <li>Profile</li>
        <li>Add event</li>
        <li>Favorites</li>s
        */}
      </ul>
    </nav>
  );
}
{/* HEADER */}
function Header() {
  return (
    <header className="App-header">
      <img src={/* headerImg */} className="jumbotron" alt="header-img" />
      <h1>
        Eventonica 
      </h1>
      <p>Event Recommender</p>
      <Nav></Nav>
    </header>
  );
}
{/* MAIN */}
{/* Events or Search Results */}
function Main({title, listId}) {
  return (
    <main>
      <h2>{title}</h2>
      <section>
        {/* Event list component */}
        <ul id="all-users">
          {eventonica.Events.map((event) => (
            <li>
              {event.id} - <strong>{event.name}</strong> - {event.category} - <em>{event.location}</em> - {event.date}, {event.time}, price:  ${event.price}.
            </li>
          ))}
        </ul>
        <ul id={listId}>
          {/* dynamically create lis from Eventonica database 
          Events table */}
          <li></li>
        </ul>
      </section>
    </main>
  );
}
{/* ADD EVENT FORM */}
function AddEventForm() {
  return (
    <>
    <h3>Add Event</h3>
    <form id="add-event" action="/addEvent" method="POST">
      <fieldset>
        <label>Name:</label>
        <input
          type="text" name="name"
          id="add-event-name"
          placeholder="Event Name"
        />
        <label for="event-category">Category:</label>
        <input
         type="text" name="category"
         id="event-category" 
         placeholder="Event Category"
        />

        <label for="event-location">Location:</label>
        <input
         type="text" name="location"
         id="event-location" 
         placeholder="Location"
        />

        <label for="event-date">Date:</label>
        <input
         type="text" name="date"
         id="event-date" 
         placeholder="MM-DD-YYYY"
        />
      
        <label for="event-time">Time:</label>
        <input
         type="text" name="time"
         id="event-time" 
         placeholder="HH-MM"
        />

        <label for="event-price">Price:</label>
        <input
         type="text" name="price"
         id="event-price" 
         placeholder="0.00"
        />
      </fieldset>
      <input type="submit" />
      </form>
      </>
  );
}
{/* USER SIGN IN FORM */}
function AddUser() {
  return (
    <div>
      <h3>Sign In:</h3>
      <form id="add-user" action="/addUser" method="POST">
        <fieldset>
          <label>Username:</label>
          <input type="text" id="add-username" name="username" />
        </fieldset>
        <fieldset>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" />
        </fieldset>
        <fieldset>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}
{/* USER LOGIN FORM */}
function Login() {
  return (
    <div>
      <h3>Login</h3>
      <form id="add-user" action="/addUser" method="POST">
        <fieldset>
          <label>Username:</label>
          <input type="text" id="add-username" name="username" />
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
function DeleteUserButton(user_id) {
  return (
    <button>
      Delete Profile
    </button>
  );
}
