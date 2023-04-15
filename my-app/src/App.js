import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login' 

function App() {

  const responseGoogle = response => {
    console.log(response)
    }

  const resoponseError = error => {
    console.log(error)
  }
  

  return (
    <div>
    <div className="App">
      <h1>Tyme4</h1>
    </div>

    <div>
  
      <GoogleLogin
      clientId = '967000194058-5pk1ng42csi3gj60lpcgh224qa0feq3c.apps.googleusercontent.com'
      buttonText='Sign in and Authoriize'
      onSuccess={responseGoogle}
      onFailure={resoponseError}
      cookiePolicy={'single_host_origin'}
      //important
      responseType='code'
      accessType='offline'
      scope='opinid email profile https://www.googleapis.com/auth/calendar'
      />
      </div>

    </div>
  );
}

export default App;
