import logo from './logo.svg';
import logo_hol from './logo_hol.jpg'
import './App.css'
// IMPORT TWO FUNCTIONS
import {getFullYear,getFooterCopy} from './utils'
function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className='App-header'>
        <img src={logo_hol} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      {/* BODY */}
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      {/* FOOTER */}
      <footer className='App-footer'>
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>

  );
}

export default App;
