import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <HomePage />
      </main>
    </>
  );
}

export default App;