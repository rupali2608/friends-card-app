import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function ButtonCounters(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <br />
      <PrimaryButton
        btnName="Increment"
        onBtnClick={() => setCount(count + 1)}
      />
      <br />
      <PrimaryButton
        btnName="Increment"
        onBtnClick={() => setCount(count - 1)}
      />
    </>
  );
}

export default ButtonCounters;
