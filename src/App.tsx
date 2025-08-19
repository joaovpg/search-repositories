import { BrowserRouter } from "react-router";
import { Routers } from "./Routers";
import ApolloClientProvider from "./contexts/Apollo";

function App() {
  return (
    <ApolloClientProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ApolloClientProvider>
  );
}

export default App;
