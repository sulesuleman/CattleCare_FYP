import "./App.css";
import { RouterConfig } from "./navigation";
import "./globalStyles/globalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
}

export default App;
