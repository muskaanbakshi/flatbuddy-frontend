
import './App.css';
import Home from './components/HomePage/Home';
import LoginPage from './components/LoginPage/LoginPage';
function App() {
  return (
    <div >
    {localStorage.getItem("user")==undefined || localStorage.getItem("user")==null ?
     <LoginPage/>
     :
     <Home/>
    }
    </div>
  );
}

export default App;
