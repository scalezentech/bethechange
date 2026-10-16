
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import RecentInitiatives from "./pages/RecentInitiatives";


function App() {

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <HomePage />
        
        <RecentInitiatives />

       
      </main>
    </>
  );
}

export default App;