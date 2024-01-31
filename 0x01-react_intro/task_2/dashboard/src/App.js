import logo from './logo.svg';
import logo_hol from './logo_hol.jpg'
import './App.css'
// IMPORT TWO FUNCTIONS
import {getFullYear,getFooterCopy,getLatestNotification} from './utils'
function App() {
  // GET THE TWO LABELS
  var label_email = document.getElementById("label_email");
  var label_password = document.getElementById("label_password");

  //GET THE TWO INPUTS
  var input_email = document.getElementById("input_email");
  var input_password = document.getElementById("input_password");

  //Function for foucs in Email
  function foucs_on_eamil(){
    input_email.focus();
  }
  //Function for foucs in Password
  function foucs_on_password(){
    input_password.focus();
  }
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
        {/* EMAIL ZONE */}
        <label onClick={foucs_on_eamil} id='label_email'>email</label>
        <input id='input_email' type='text'></input>
        {/* PASSWORD ZONE */}
        <label onClick={foucs_on_password} id='label_password'>password</label>
        <input id='input_password' type='password'></input>
        {/* BUTTON ZONE */}
        <button>OK</button>
      </body>
      {/* FOOTER */}
      <footer className='App-footer'>
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>

  );
}

export default App;

