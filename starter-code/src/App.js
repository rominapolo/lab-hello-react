
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs-dark.png' className="ironhack-logo-xs" alt="logo"/>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library and become a super Ninja Developer</p>

        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </button>
      </header>

      <section className="App-middle">
      <div className="box">
        <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" className="icons"/>
         <h2>Declarative</h2>
         <p>React makes it painless to create interactive UIs</p>
      </div>

      <div className="box">
        <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" className="icons"/>
         <h2>Components</h2>
         <p>Build encapulated components that manage their state</p>
      </div>

       <div className="box">
        <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" className="icons"/>
         <h2>Single-Way</h2>
         <p>A set of immutable values are passed to the components</p>
      </div>

        <div className="box">
        <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" className="icons"/>
         <h2>JSX</h2>
         <p>Statically-typed designed to run on modern browsers</p>
      </div>
      </section>

      </div>
    
  );
}

export default App;
