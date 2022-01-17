import Head from "next/head";
import React from "react";
import styles from '../../styles/Ninjas.module.css'
import Link from "next/link";

// Fetching Data Api
export const getStaticProps = async () => {
    // Result
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()

    return {
        props: {
            ninjas: data
        }
    }
}

function Ninjas({ ninjas }) {
  return (
      <div>
        <h1>Ninja List</h1>

        {ninjas.map(ninja => (
            <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                <a className={styles.single}> 
                    <h3>{ninja.name}</h3>
                </a>
            </Link>
        ))}

      </div>
  );
}

export default Ninjas;
