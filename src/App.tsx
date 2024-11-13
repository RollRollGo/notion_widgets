import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "樱桃小丸子语录";
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
