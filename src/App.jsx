import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";



function App() {

  return (
    <>
      <Header />

      <main className="min-h-screen">

        <Home />

      </main>

      <Footer />
    </>
  );
}

export default App;