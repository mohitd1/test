import logo from './logo.svg';
import './App.css';
import './style.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut,withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)
function App() {
  return (
    <html>
    <div className="App">
      <header className="App-header">
        <h2>hello</h2>
        
       <AmplifySignOut/>
      </header>
    </div>
    </html>
   
  );
}
export default withAuthenticator(App);
