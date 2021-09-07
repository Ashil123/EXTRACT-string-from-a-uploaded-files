import React from "react";
import ReactDOM from "react-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import App from "./App";

ReactDOM.render(<RecoilRoot><App /></RecoilRoot>, document.getElementById("root"));
