import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import "./App.css"
import Signin from "./pages/Auth/Signin";
import ShowDetail from "./pages/ShowDetail";
import Shows from "./pages/Shows";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import WatchList from "./pages/WatchList";
import Error404 from "./pages/Error404";
import Action from "./pages/Genres/Action";
import Drama from "./pages/Genres/Drama";
import Horror from "./pages/Genres/Horror";
import Comedy from "./pages/Genres/Comedy";
import Adventure from "./pages/Genres/Adventure";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" Component={Shows} />
            <Route path="/shows/:id" Component={ShowDetail} />
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
            <Route path="/profile" Component={Profile} />
            <Route path="/watchList" Component={WatchList} />
            <Route path="*" Component={Error404} />
            <Route path="/action" Component={Action} />
            <Route path="/drama" Component={Drama} />
            <Route path="/horror" Component={Horror} />
            <Route path="/comedy" Component={Comedy} />
            <Route path="/adventure" Component={Adventure} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
