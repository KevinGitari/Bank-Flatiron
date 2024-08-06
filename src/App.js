import "./App.css";
import Form from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SearchBar from "./components/SearchBar";
import SingleTransaction from "./components/SingleTransaction";

function App() {
  return (
    <div className="App">
      <div className="bankheader">
      <h1>Flatiron Bank</h1>
      </div>
      <SearchBar />
      <Form />
      <TransactionList />
      <SingleTransaction />
     
    </div>
  );
}

export default App;
