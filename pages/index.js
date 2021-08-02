import Hero from '../components/Hero/Hero';
import TopSearch from '../components/TopSearch';

export default function Home({ data }) {
  return (
    <main className='main'>
      <article className='article'>
        <Hero />
        <TopSearch topSearchs={data} />
      </article>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/api/cats/stats`);
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
