/* COM useEffect */

// 'use client'
// import styles from './page.module.css'
// import { useCallback, useEffect, useState } from 'react'
// import axios from 'axios';
// import Image from 'next/image';

// export default function Home() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const getDogs = useCallback(async () => {
//     try {
//       const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//       setData(res.data);
//       setIsLoading(true);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [setData]);

//   useEffect(() => {
//     getDogs();  
//   }, [getDogs]);

//   return (
//     <main className={styles.main}>
//      {isLoading &&  <Image src={data?.message} height={150} width={150} alt='dogs' />}
//      {!isLoading  &&  <h1>Loading...</h1>}
//       <button className={styles.btn} onClick={getDogs}>Random</button>
//     </main>
//   )
// }

//-------------------------------------//

/* COM o tanStack query (useQuery) */
'use client'
import styles from './page.module.css'
import axios from 'axios';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

const  getDogs = async () => {
const res = await axios.get('https://dog.ceo/api/breeds/image/random')
return res.data
}
export default function Home() {

  const  { data, isLoading, refetch } = useQuery({
    queryKey: ['message'],
    queryFn: getDogs
  });

  return (
    <main className={styles.main}>
     {!isLoading &&  <Image src={data?.message} height={150} width={150} alt='dogs' />}
     {isLoading  &&  <h1>Loading...</h1>}
      <button className={styles.btn} onClick={refetch}>Random</button>
    </main>
  )
}
