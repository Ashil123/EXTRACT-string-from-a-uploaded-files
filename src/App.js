import React from 'react';
import './style.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';

export const vivoMsg = atom({
  key: 'vivoMsg',
  default: []
});

export default function App() {
  const [vivoMessages, setVivoMessages] = useRecoilState(vivoMsg);
  console.log('initialLoad', vivoMsg, vivoMessages);

  const setVivoMessage = useSetRecoilState(vivoMsg);

  const showFile = async e => {
    e.preventDefault();
    console.log('showFile', vivoMessages);
    const readFile = index => {
      if (index >= e.target.files.length) return;
      var reader = new FileReader();
      reader.onload = e => {
        const text = e.target.result;
        const reg = new RegExp(/(?<=:).*?(?=\')/gm);
        const replacedString = text.match(reg);
        // setVivoMessages([...vivoMessages, ...replacedString]);
        setVivoMessage(old => [...old, ...replacedString]);
        readFile(index + 1);
      };
      reader.readAsText(e.target.files[index]);
    };
    readFile(0);
  };
  return (
    <div>
      <input type="file" multiple onChange={e => showFile(e)} />
      {console.log('---', vivoMessages)}
    </div>
  );
}
