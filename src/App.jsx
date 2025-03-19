import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
        <div className="flex py-4">
          <div>
            <ControlPanel />
          </div>
          <div className="flex-grow">
            <p>color scale display</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
