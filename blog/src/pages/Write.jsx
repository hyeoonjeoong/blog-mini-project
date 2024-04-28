import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Write = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("mmm");
    titleRef.current.focus();
  }, [titleRef]);

  const changeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const clickSubmit = () => {
    console.log("click submit");
  };
  return (
    <>
      <div className="writeContainer">
        <input
          type="text"
          placeholder="제목을 입력해주세요 :)"
          onChange={changeTitle}
          ref={titleRef}
        ></input>
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
        <button className="submit" onClick={clickSubmit}>
          작성하기
        </button>
      </div>
    </>
  );
};

export default Write;
