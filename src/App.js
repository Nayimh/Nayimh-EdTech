
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import Login from "./Forms/Login";
import Register from "./Forms/Register/Index";
import NotFound from "./NotFound/NotFound";
import Class from "./Pages/Dashboard/Class";
import Comment from "./Pages/Dashboard/Comment";
import Dashboard from "./Pages/Dashboard/DashboardHome";
import DashboardHome from "./Pages/Dashboard/DashboardHome/Dashboard";
import StudentEditProfile from "./Pages/Dashboard/EditProfile";
import Scedule from "./Pages/Dashboard/Scedule";
import ClassRequest from "./Pages/Dashboard/Students";
import Teacher from "./Pages/Dashboard/Teacher";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardHome />}>
              <Route index element={<Dashboard />} />
              <Route path="classrequest" element={<ClassRequest />} />
              <Route
                path="editProdile"
                element={<StudentEditProfile />}
              />
              <Route path="teacher" element={<Teacher />} />
              <Route path="class" element={<Class />} />
              <Route path="comment" element={<Comment />} />
              <Route path="scedule" element={<Scedule />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
