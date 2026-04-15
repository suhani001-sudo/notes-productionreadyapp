import ErrorBoundary from "./components/ErrorBoundary";
import Notes from "./pages/Notes";

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
      <h1>📒 Notes App</h1>
      <Notes />
      </div>
    </ErrorBoundary>
  );
}

export default App;