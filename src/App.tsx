import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "樱桃小丸子语录";
  }, []);

  return (
    <div id="background">
      <div id="container">
        <div id="quote"></div>
        <div id="author">——《樱桃小丸子》</div>
        <div id="divider"></div>
        <div id="footer">
          <img id="logo" src="../assets/logo_figure.png" />
          <span id="info">
            Powered by
            <a
              href="https://www.notion.so/roll-roll-go/s-Home-1beed66eeff84a3cabc455bee81c7237"
              target="_blank"
            >
              RollRollGo
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
