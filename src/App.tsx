import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormRegister } from "./pages/FormRegister";
import { FormLogin } from "./pages/FormLogin";
import { Home } from "./pages/Home";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { auth } from "./services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "./redux/slices/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormRegister />} />
          <Route path="/login" element={<FormLogin />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
