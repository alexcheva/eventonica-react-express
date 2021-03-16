//import logo from './logo.svg';
//import headerImg from './'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="jumbotron" alt="header-img" />
        <h1>
          Eventonica 
        </h1>
        <p>Event Recommender</p>
        <nav>
          <ul>
            <li>Sign in</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Events</h2>
        <section>
          <ul>
            <li></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
