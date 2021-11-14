import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import Applications from "./Pages/Applications";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  //const [currentUser, setCurrentUser] = useState();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
     // setCurrentUser(user);
      localStorage.setItem('uid',user.uid);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Switch>
      <Route path="/applicants-list">
          <Applications />
        </Route>
        <Route path="/admin-dashboard">
          <Dashboard />
        </Route>
        <Route path="/student-dashboard">
          <StudentDashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;