import React, {useEffect} from 'react';
import charactersController  from "./controllers/charactersController";
import Card from "./components/cards";

function App() {

  useEffect(() => {
    (async () => {
      // Calling fetchDataFromURL at entry...
      await charactersController.fetchDataFromURL();
    })();
  }, []);

  return (
    <div className="App">
      {/* Loading card component */}
      <Card />
    </div>
  );
}

export default App;
