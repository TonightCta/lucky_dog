import RouteConfig from './router';
import { HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <RouteConfig />
      </div>
    </HashRouter>

  );
}

export default App;
