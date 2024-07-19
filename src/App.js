 import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
 import Login from "./pages/login/Login";
 import Register from "./pages/register/Register";
 import Setting from "./pages/settings/Setting";
 import Write from "./pages/write/Write";
import TopNav from "./topbar/TopNav";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  // const user = true;
  const user = false;

  return (
    <>
  <Router>
    <TopNav/>
    <Routes>
    <Route  exact path="/" element={<Home />} />
    <Route exact path="/register" element={user? <Home/>:<Register />} />
    <Route exact path="/login" element={user? <Home/>:<Login />} />
    <Route  exact path="/write" element={user? <Write />:<Register/>} />
    <Route exact path="/setting" element={user? <Setting />:<Login/>} />
    <Route exact path="/post" element={<Single />} />
    </Routes>
  </Router>
    {/* <TopNav/> */}
    {/* <Home/> */}
    {/* <Single/> */}
    {/* <Write/> */}
    {/* <Setting/> */}
    {/* <Login/> */}
    {/* <Register/> */}

    
    </>
  );
}

export default App;
