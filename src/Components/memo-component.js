import React from "react";

function MemoComponent(props) {
  console.log("MemoComponent");
  return <p>I am Memo Component</p>;
}

export default React.memo(MemoComponent);
