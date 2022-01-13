import "./App.css";

import Baslik from "./components/Baslik";
import Butce from "./components/Butce";
import { Harcamalar } from "./components/Harcamalar";
import { HarcamaListesi } from "./components/HarcamaListesi";
import { YeniHarcama } from "./components/YeniHarcama";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Baslik />
      <div className="container">
        <Butce />
        <Harcamalar />
        <HarcamaListesi />
        <YeniHarcama />
      </div>
    </GlobalProvider>
  );
}

export default App;
