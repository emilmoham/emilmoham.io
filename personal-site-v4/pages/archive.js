import ArchiveListing from "../components/ArchiveListing";
import styles from '../styles/Archive.module.css'

function Archive ({ posts }) {
  return (
    <div className={styles.container}>
      {
        posts.map(function(blog, index){
          return (
            <ArchiveListing className={styles.item} props={blog} key={index} />
          );
        })
      }
    </div>
  );
}

export async function getStaticProps(){
  const res = await fetch('https://api.emilmoham.io/blog/list');
  const posts = await res.json();

  return { props: { posts } }
}

export default Archive;
