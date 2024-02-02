export default function TabButton({ children }) {
  function handleClick() {
    console.log("TabButton clicked!");
  }

  return (
    <li>
      {/* 
      - do not execute that function in the prop
	    - pass function as a value to the prop 
      */}
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
