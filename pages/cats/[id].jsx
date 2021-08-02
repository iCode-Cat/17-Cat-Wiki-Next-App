import axios from 'axios';
import Image from 'next/image';
import classes from '../../scss/Cat.module.scss';
function Cat({ post }) {
  const { name, images, reference_image_id, description } = post[0];
  return (
    <main className={classes.cat_main}>
      <article className={classes.wrapper}>
        <div className={classes.image}>
          <Image
            src={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`}
            objectFit='cover'
            width={150}
            height={150}
            loading='eager'
            placeholder='blur'
            blurDataURL={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`}
          />
        </div>
        <h1 className={classes.title}>{name}</h1>
        <p className={classes.desc}>{description}</p>
        <p className={classes.title_2}>Other photos</p>
        <div className={classes.card}>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              objectFit='cover'
              width={150}
              height={150}
              loading='eager'
              placeholder='blur'
              blurDataURL={image.url}
            />
          ))}
        </div>
      </article>
    </main>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3001/api/cats');
  const posts = await res.json();
  console.log(posts);
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {
      id: post.name.toLowerCase().replace(/ /g, '_'),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params, imageId }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:3001/api/cats/search/${params.id}`);
  const post = await res.json();
  const images = await axios.post(
    'http://localhost:3001/api/cats/images/' + post[0].id
  );
  post[0].images = images.data;
  // Pass post data to the page via props
  return { props: { post }, revalidate: 86400 };
}

export default Cat;
