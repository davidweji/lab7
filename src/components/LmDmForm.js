import { useLocalStorage } from "./useLocalStorage";


const LmDmForm = () => {
    const [mode, setMode] = useLocalStorage("mode", "light");

    const handleModeChange = (selectedMode) => {
        setMode(selectedMode);
    }

  return (
    <form className={`form lightForm p-3 border rounded shadow text-center mx-auto ${mode === "dark" ? "darkForm" : ""}`}>
        <div className="input">
            <input
            className="form-check-input"
            type="radio"
            name="mode"
            value="light"
            checked={mode === "light"}
            onChange={() => handleModeChange("light")}
            />{" "}
            <label className="form-check-label">
                Light Mode
            </label>
        </div>
    

        <div className="input">
            <input
            className="form-check-input"
            type="radio"
            name="mode"
            value="dark"
            checked={mode === "dark"}
            onChange={() => handleModeChange("dark")}
            />{" "}
            <label className="form-check-label">
                Dark Mode
            </label>
        </div>

      <input type="submit" value="Submit" className="submit-btn"></input>
    </form>
  );
};

export default LmDmForm;