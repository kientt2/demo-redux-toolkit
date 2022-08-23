import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./reducer";

function App() {
  const num = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const { incremented, decremented } = counterSlice.actions;

  //dispatch an action increment to the store
  const handleIncrement = () => {
    dispatch(incremented());
  }

  //dispatch an action decrement to the store
  const handleDecrement = () => {
    dispatch(decremented());
  }

  return (
    <div>
      <div>
        <label>Number: {num}</label>
      </div>
      <button onClick={handleIncrement}>dispatch +</button>
      <button onClick={handleDecrement}>dispatch -</button>
    </div>
  );
}

export default App;
