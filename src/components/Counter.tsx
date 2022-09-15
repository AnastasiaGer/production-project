

import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0)

  function incr() {
    setCount(count+1)
  }

  return ( 
    <div>
      <div>{count}</div>
      <button onClick={incr} className='button'> Inc</button>
    </div>
   );
}
 
export default Counter;