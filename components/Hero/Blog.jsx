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
        <img className={classes.image_container} src='/image2.png' />
        <img className={classes.image_container} src='/image3.png' />
        <img className={classes.image_container} src='/image1.png' />
      </section>
    </article>
  );
};

export default Blog;
