import React from 'react';
import classes from '../../scss/Blog.module.scss';
import Image from 'next/image';
const Blog = () => {
  return (
    <article className={classes.wrapper}>
      <section>
        <div className={classes.shape}></div>
        <p className={classes.title}>Why should you have a cat?</p>
        <p className={classes.description}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety level
        </p>
        <div className={classes.redirect}>READ MORE...</div>
      </section>
      <section className={classes.gallery}>
        <span className={classes.image_container}>
          <Image width={273} height={167} alt='cat-img' src='/image2.png' />
        </span>
        <span className={classes.image_container}>
          <Image
            width={238}
            height={385}
            alt='cat-img'
            className={classes.image_container}
            src='/image3.png'
          />
        </span>
        <span className={classes.image_container}>
          <Image
            width={195}
            height={293}
            alt='cat-img'
            className={classes.image_container}
            src='/image1.png'
          />
        </span>
      </section>
    </article>
  );
};

export default Blog;
