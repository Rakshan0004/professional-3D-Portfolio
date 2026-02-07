// Temporary test file to debug blank page
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";

const AppTest = () => {
  console.log("AppTest rendering...");
  
  return (
    <div>
      <h1 style={{ color: 'white', padding: '20px' }}>Test - If you see this, React is working!</h1>
      <Navbar />
      <Hero />
    </div>
  );
};

export default AppTest;

