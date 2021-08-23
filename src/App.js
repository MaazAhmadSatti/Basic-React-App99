import logo from './logo.svg';
import './App.css';

function App(props) {
  return <div>Hello <strong>{props.name}</strong> and my Age is {props.age}
              <ul>
                <li>I'm a Fresh Graduate of Software Engineering</li>
                <li>I look forward to have a career in Full Stack Web Development</li>
              </ul>
    </div>
}

export default App;
