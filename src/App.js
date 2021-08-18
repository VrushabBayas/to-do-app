import "./App.css";
import ErrorBoundary from "./Components/Error/ErrorBoundry";
import Layout from "./Components/Layout/Layout";
import TodoListContainer from "./Components/ToDos/Container/TodoListContainer";

function App() {
  return (
    <div data-testid="component-app" className="container">
      <ErrorBoundary>
        <Layout>
          <TodoListContainer />
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
