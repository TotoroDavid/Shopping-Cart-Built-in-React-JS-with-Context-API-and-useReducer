import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//useContext
import Context from './context/Context';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
)