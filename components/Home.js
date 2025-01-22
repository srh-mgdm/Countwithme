import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
     <div className={styles.main}>
       <Image className={styles.logo} src="/logo.png" alt="Logo" width={400} height={200} /> 
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
