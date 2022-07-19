import ArchiveListing from "../components/ArchiveListing";

function Archive ({ posts }) {
  return (
    <div>
      {
        posts.map(function(blog, index){
          return (
            <ArchiveListing props={blog} key={index} />
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
