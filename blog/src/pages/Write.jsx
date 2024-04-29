import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState("");
  const editorRef = React.createRef();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("mmm");
    titleRef.current.focus();
  }, [titleRef]);

  const changeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const clickSubmit = () => {
    //const htmlContent = editorRef.current?.getInstance().getHTML();
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    if (title !== "" && markdownContent !== "") {
      let postingId = 100;
      const submitPost = { title, markdownContent, postingId };
      //console.log(submitPost);
      navigate(`/post/${postingId}`, { state: { submitPost } });
    } else {
      alert("제목과 본문을 모두 작성해주세요.");
    }
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
          // initialValue="내용을 입력해주세요 :)"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
        />
        <button className="submit" onClick={clickSubmit}>
          작성하기
        </button>
      </div>
    </>
  );
};

export default Write;
