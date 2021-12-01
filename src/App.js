import "./App.css";
import { RouterConfig } from "./navigation";
import "./globalStyles/globalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RoleAuthProvider } from "./contexts/roleAuthContext";
import { ToastContainer } from "react-toastify";
import { Loader } from "globalComponents";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <Loader /> */}
      <RoleAuthProvider>
        <RouterConfig />
      </RoleAuthProvider>
    </div>
  );
}

export default App;
