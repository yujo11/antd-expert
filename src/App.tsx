import { Button } from "antd";

import { useState } from "react";
import Menu from "./Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
    </>
  );
}

export default App;
