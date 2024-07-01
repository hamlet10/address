import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UserDetail from './components/UserDetail';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user/:id" element={<UserDetail />} />
        {/* <Route path="/detail" element={<OtherComponent />} />
        <Route
          path="hotel/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <MyHotels />
            </React.Suspense>
          }
        /> */}
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
