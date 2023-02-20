import Home from "./pages/Home";
import GithubState from "./context/GithubState";

function App() {
  return (
    <GithubState>
      <Home />
    </GithubState>
  );
}

export default App;
