import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home({ latest }) {
  return (
    <div>
      <Head>
        <title>Emil Mohammed</title>
        <meta name="description" content="Welcome to my personal site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.jumbotron}>
        <div className={styles.overlay}>
          <h1>Hi, I'm Emil.</h1>  
          <p>I will get better at programming using Cunningham's Law</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.item + ' ' + styles.item_large}>
          <h1>The Goal</h1>
            <p>
              I've thrown together this website with the goal of  giving myself a
              space where I can build up my problem solving, programming, and
              communication skills simultaneously. The idea is to write blog 
              posts where I tackle a coding challenges tracking my initial 
              approach, areas where my knowledge is lacking, problems encountered,
              and lessons learned once the problem is solved. Hopefully I'll be 
              able to make that interesting. 
            </p> 
        </div>
        <div className={styles.item + ' ' + styles.item_small}>
          <h1>Latest Blog</h1>
          <h3 className={styles.blogTitle}>
            <a className={styles.blogLink} href={"/blog/" + latest.uuid}>{latest.title}</a>
          </h3>
          <p className={styles.blogSummary}>
            {latest.short_description}
            <br/>
            <a className={styles.blogLink} href={"/blog/" + latest.uuid}>Coninue reading...</a>
          </p> 
        </div>
        <div className={styles.item + ' ' + styles.item_small}>
          <h1>Planned Features</h1>
          <ul>
            <li>Blog Tags </li>
            <li>Search</li>
            <li>Blog Thumbnails</li>
            <li>Archive Pagination</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.emilmoham.io/blog/list/1');
  let latest = await res.json();
  
  latest = latest[0];

  return {
    props: {
      latest,
    },
  }
}

export default Home;