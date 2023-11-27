import { Println } from "@wails/main/App";
import styled from "styled-components";

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
  object-position: center;
`;

type Props = {
  /** 表示する画像のURLやパスか、BASE64エンコーディングされた画像データ */
  src: string;
};

export function Image(props: Props) {
  return <Img src={props.src} />;
}
