

import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0)

  function incr() {
    setCount(count+1)
  }

  return ( 
    <div>
      <div>{count}</div>
      <button onClick={incr} className={classes.button}> Inc</button>
    </div>
   );
}
 
export default Counter;