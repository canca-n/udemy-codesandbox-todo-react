import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px" /*横幅*/,
  height: "30px" /*高さ*/,
  padding: "8px" /*内側の余白*/,
  margin: "8px" /*外側の余白*/,
  borderRadius: "8px" /*角をまるくする*/
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
