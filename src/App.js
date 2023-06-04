import Layout from "./components/Layout";
import Balance from "./components/Balance";
import Form from "./components/From";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  );
}

export default App;
