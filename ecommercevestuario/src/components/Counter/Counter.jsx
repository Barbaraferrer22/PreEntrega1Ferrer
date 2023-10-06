import "./counter.css";
import { useCounter } from "../hooks/useCounter";

const Counter = ({ inicial, stock, onAdd }) => {
  const { count, handleAdd, handleSubtract } = useCounter(inicial, stock);

  return (
    <div className="contador">
      <button onClick={handleAdd}> + 1</button>
      <strong>{count}</strong>
      <button onClick={handleSubtract}> - 1</button>
      <button onClick={() => onAdd(count)}>Agregr al Carrito</button>
    </div>
  );
};

export default Counter;
