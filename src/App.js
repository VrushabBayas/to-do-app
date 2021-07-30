import "./App.css";
import Layout from "./Components/Layout/Layout";
import TodoListContainer from "./Components/ToDos/Container/TodoListContainer";

function App() {
  return (
    <div data-testid="component-app">
      <Layout>
        <TodoListContainer />
      </Layout>
    </div>
  );
}

export default App;
