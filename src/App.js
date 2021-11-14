import "./App.css";
import { RouterConfig } from "./navigation";
import "./globalStyles/globalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RoleAuthProvider } from "./contexts/roleAuthContext";

function App() {
  return (
    <div className="App">
      <RoleAuthProvider>
        <RouterConfig />
      </RoleAuthProvider>
    </div>
  );
}

export default App;
