import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import Skills from '../../components/Skills';
import classes from '../../scss/Cat.module.scss';
function Cat({ post }) {
  const {
    name,
    images,
    reference_image_id,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
  } = post[0];
  const [skills, setSkills] = useState([
    {
      label: 'Temperament',
      value: temperament,
    },
    {
      label: 'Origin',
      value: origin,
    },
    {
      label: 'Life Span',
      value: life_span,
    },
    {
      label: 'Adaptability',
      value: adaptability,
    },
    {
      label: 'Affection Level',
      value: affection_level,
    },
    {
      label: 'child Friendly',
      value: child_friendly,
    },
    {
      label: 'Grooming',
      value: grooming,
    },
    {
      label: 'Intelligence',
      value: intelligence,
    },
    {
      label: 'Health Issues',
      value: health_issues,
    },
    {
      label: 'Social Needs',
      value: social_needs,
    },
    {
      label: 'Stranger Friendly',
      value: stranger_friendly,
    },
  ]);
  return (
    <main className={classes.cat_main}>
      <article className={classes.wrapper}>
        <div className={classes.image}>
          <Image
            src={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`}
            objectFit='cover'
            width={200}
            height={200}
            loading='eager'
            placeholder='blur'
            blurDataURL={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`}
            alt='image-cat'
          />
        </div>
        <h1 className={classes.title}>{name}</h1>
        <p className={classes.desc}>{description}</p>
        <div className={classes.skills}>
          {skills.map((skill, index) => (
            <Skills key={index} label={skill.label} value={skill.value} />
          ))}
        </div>
        <p className={classes.title_2}>Other photos</p>
        <div className={classes.card}>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              objectFit='cover'
              width={300}
              height={300}
              loading='eager'
              placeholder='blur'
              blurDataURL={image.url}
              alt='image-cat'
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
  const res = await fetch('https://cat-wiki-apiv2.herokuapp.com/api/cats');
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
  const res = await fetch(
    `https://cat-wiki-apiv2.herokuapp.com/api/cats/search/${params.id}`
  );
  const post = await res.json();
  const images = await axios.post(
    'https://cat-wiki-apiv2.herokuapp.com/api/cats/images/' + post[0].id
  );
  post[0].images = images.data;
  // Pass post data to the page via props
  return { props: { post }, revalidate: 86400 };
}

export default Cat;
