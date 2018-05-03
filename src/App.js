import React from "react";

import ImageList from "./containers/ImageList";

// Search Component を追加する
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      App
      <Search />
      <ImageList />
    </div>
  );
};

export default App;
