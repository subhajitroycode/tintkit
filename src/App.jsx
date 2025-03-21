import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import { ColorProvider } from "./contexts/colorContext";

function App() {
  return (
    <>
      <Header />
      <ColorProvider>
        <main className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
          <div className="flex">
            <div className="pt-4 pr-4 border-r border-neutral-200 dark:border-neutral-700">
              <ControlPanel />
            </div>
            <div className="flex-grow">
              <p>color scale display</p>
            </div>
          </div>
        </main>
      </ColorProvider>
    </>
  );
}

export default App;
