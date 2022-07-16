import { useEffect } from "react";

// pages
import Home from "./pages/home";

// external-libraries
import PullToRefresh from "pulltorefreshjs";

const App = () => {
  //

  useEffect(() => {
    PullToRefresh.init({
      mainElement: "body",
      onRefresh() {
        window.location.reload();
      },
    });

    return () => {
      PullToRefresh.destroyAll();
    };

    //
  }, []);

  return <Home />;
};

export default App;
