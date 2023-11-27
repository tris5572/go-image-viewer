import { useState, DragEvent, useEffect } from "react";
import styled from "styled-components";

import { Image } from "./Image";
import logo from "@/assets/images/logo-universal.png";
// import "./App.css";
// import { Greet } from "@wails/main/App";
// import { Greet } from "../../wailsjs/go/main/App";
import { Println } from "@wails/main/App";

const AppWrapper = styled.div`
  color: gray;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [imageSrc, setImageSrc] = useState(logo);
  const [isDragging, setIsDragging] = useState(false);
  // const [resultText, setResultText] = useState(
  //   "Please enter your name below 👇"
  // );
  // const [name, setName] = useState("");
  // const updateName = (e: any) => setName(e.target.value);
  // const updateResultText = (result: string) => setResultText(result);

  // function greet() {
  //   Greet(name).then(updateResultText);
  // }

  // ウィンドウ内にファイルがドラッグされたときのイベントリスナーを設定する。
  useEffect(() => {
    window.addEventListener("dragenter", dragStart);
    return () => {
      window.removeEventListener("dragenter", dragStart);
    };
  }, []);

  function dragStart() {
    setIsDragging(true);
  }

  function dragEnd() {
    setIsDragging(false);
  }

  // ファイルがドロップされたときに呼び出される。
  function onFileDroped(file: File) {
    dragEnd();
    if (file.type.substring(0, 5) === "image") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        // BASE64エンコーディングされた画像を取得して設定する
        const src = fileReader.result as string;
        setImageSrc(src);
      };
      fileReader.readAsDataURL(file);
    }
  }

  return (
    <AppWrapper>
      <Image src={imageSrc} />
      {isDragging && <DropOverlay dragEnd={dragEnd} onDrop={onFileDroped} />}
    </AppWrapper>
  );
}

export default App;

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// ファイルをドラッグしたときのオーバーレイ
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

const DraggingBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff7;
`;

type DropOverlayProps = {
  /** ドラッグ終了時のコールバック。ドラッグがビューから外れたときに呼び出す */
  dragEnd: () => void; //
  /** ファイルがドロップされたときのコールバック */
  onDrop: (file: File) => void;
};

/** ファイルがウィンドウ内にドラッグされたときに重ねて表示する。そしてドロップを受け入れる。 */
function DropOverlay(props: DropOverlayProps) {
  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (0 < e.dataTransfer.files.length) {
      // ファイルがドロップされたとき、最初の1個を受け入れる
      // Println(e.dataTransfer.files[0].webkitRelativePath);
      props.onDrop(e.dataTransfer.files[0]);
    }
    e.dataTransfer.clearData();
  }

  return (
    <DraggingBox
      onDragLeave={props.dragEnd}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    />
  );
}
