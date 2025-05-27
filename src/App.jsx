import ControlPanel from "./components/Dashboard/ControlPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ColorDisplay from "./components/ScaleDisplay/ColorDisplay";
import UISample from "./components/UISamples/UISample";
import { ColorProvider } from "./contexts/colorContext";

function App() {
  return (
    <ColorProvider>
      <Header />
      <main className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
        <div className="md:flex border-b border-neutral-200 dark:border-neutral-700">
          <div className="md:pt-4 md:pr-1 md:border-r border-neutral-200 dark:border-neutral-700">
            <ControlPanel />
          </div>
          <div className="flex-grow flex justify-center">
            <ColorDisplay />
          </div>
        </div>
        <UISample />
      </main>
      <Footer />
    </ColorProvider>
  );
}

export default App;
