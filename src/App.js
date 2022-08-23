import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./reducer";

function App() {
  const num = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const { incremented, decremented } = counterSlice.actions;

  return (
    <div>
      <div>
        <label>Number: {num}</label>
      </div>
      <button
        onClick={() => {
          dispatch(incremented());
        }}
      >
        dispatch +
      </button>
      <button
        onClick={() => {
          dispatch(decremented());
        }}
      >
        dispatch -
      </button>
    </div>
  );
}

export default App;
