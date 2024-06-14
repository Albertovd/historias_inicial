import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles.css";
function App() {
  return (
    <>
      <Router>
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
