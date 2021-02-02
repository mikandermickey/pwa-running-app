import logo from '../logo.svg';
import '../App.css';


const Home = () => {
    return ( 
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://angry-engelbart-806570.netlify.app/hoblifnof"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to another page!
        </a>
      </header>
    </div>
     );
}
 
export default Home;