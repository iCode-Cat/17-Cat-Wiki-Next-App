import Blog from '../components/Hero/Blog';
import Hero from '../components/Hero/Hero';
import TopSearch from '../components/TopSearch';

export default function Home({ data }) {
  return (
    <main className='main'>
      <article className='article'>
        <Hero />
        <TopSearch topSearchs={data} />
        <Blog />
      </article>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://cat-wiki-apiv2.herokuapp.com/api/cats/stats`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.sort((a, b) => b.searchs - a.searchs).slice(0, 10),
    }, // will be passed to the page component as props
  };
}
