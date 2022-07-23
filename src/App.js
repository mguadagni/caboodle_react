import './App.css';
import AppRouter from './components/Routers/AppRouter';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
