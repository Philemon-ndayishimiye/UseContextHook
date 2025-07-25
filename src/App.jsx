import Profile from "./component/Profile";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-amber-600 text-black"
            : "bg-green-500 text-white"
        }`}
      >
        <Profile />

        <button
          onClick={toggleTheme}
          className={`${theme === "light" ? "bg-blue-600" : "bg-purple-700"}`}
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default App;
