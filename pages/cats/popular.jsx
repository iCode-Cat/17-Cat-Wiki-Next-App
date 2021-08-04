import React from 'react';
import classes from '../../scss/Popular.module.scss';
import Image from 'next/image';

const popular = ({ data }) => {
  return (
    <main>
      <article className={classes.wrapper}>
        <h1 className={classes.title}>Top 10 most searched breeds</h1>
        {data.map((cat, index) => (
          <div key={cat._id} className={classes.card}>
            <div className={classes.img}>
              <Image
                placeholder='empty'
                loading='lazy'
                layout='fixed'
                objectFit='cover'
                quality={100}
                width={170}
                height={170}
                alt={cat.name}
                src={cat.image}
              />
            </div>
            <p className={classes.name}>{index + 1 + '. ' + cat.name}</p>
            <p className={classes.desc}>{cat.desc}</p>
          </div>
        ))}
      </article>
    </main>
  );
};

export default popular;

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
