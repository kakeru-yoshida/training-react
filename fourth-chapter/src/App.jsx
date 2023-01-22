import { Fragment } from 'react';
import { ColoredMessage } from './components/ColorMessage';
import { CssModules } from './components/CssModules';
import { StyledComponents } from './components/StyledComponents';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [num, setNum] = useState(0)
  const onClickButton = () => {
    // setNum(num + 1)
    setNum((prev) => prev +1)
  }

  useEffect(() => {
    alert()
  }, [num])

  return(
    <Fragment>
      <div>
        <p>第四章</p>
        <h1>こんにちわ</h1>
        <ColoredMessage color = "blue">お元気ですか？</ColoredMessage>
        <ColoredMessage color = "pink">元気です！</ColoredMessage>
        <button onClick={onClickButton}>ボタン</button>
        <p>{ console.log(num) }</p>
        <p>{ num }</p>
      </div>
      <hr />
      <div>
        <p>第五章</p>
        <CssModules></CssModules>
        <StyledComponents></StyledComponents>
      </div>
    </Fragment>
  ) ;
}