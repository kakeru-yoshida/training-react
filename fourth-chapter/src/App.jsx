import { Fragment } from 'react';
import { ColoredMessage } from './components/ColorMessage';
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
      <h1>こんにちわ</h1>
      <ColoredMessage color = "blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color = "pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{ console.log(num) }</p>
      <p>{ num }</p>
    </Fragment>
  ) ;
}