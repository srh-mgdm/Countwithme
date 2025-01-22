import styles from '../styles/Home.module.css';
import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
     <div className={styles.main}>
       <h1 className={styles.title}>
         count with me
       </h1>
       <div className={styles.buttonContainer}>
         <button onClick={() => setCount(count + 1)} className={styles.buttonPlus}>+</button>
         <span className={styles.count}>{count}</span>
         <button onClick={() => count>0 && setCount(count - 1)} className={styles.buttonMinus} disabled={count===0}>-</button>
       </div>
       
     </div>
       
      
    </>
  );
}

export default Home;
