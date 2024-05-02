import { useState, useEffect } from "react";
import vyroSquareLogo from "./vyroSquareLogo.svg";
import styles from "./App.module.scss";
import Vehicle from "./components/Vehicle";
import Loader from "./components/Loader";

// TODO
// Load the mockedVehicles from the GraphQL API
// See ./mockedVehicles.ts for API details
import { getStockedVehicles } from "./mockedVehicles";

function App() {
  const [stockedVehicles, setStockVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await getStockedVehicles();
      if (res) {
        setStockVehicles(res);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className={styles.app}>
      <img src={vyroSquareLogo} className={styles.logo} alt="Vyro logo" />
      <h1>Welcome to Vyro</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {stockedVehicles.map((vehicle: any) => (
            <Vehicle {...vehicle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
