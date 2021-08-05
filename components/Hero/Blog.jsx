import React from 'react';
import classes from '../../scss/Blog.module.scss';
import Image from 'next/image';
const Blog = () => {
  return (
    <article className={classes.wrapper}>
      <div className={classes.shape}></div>
      <p className={classes.title}>Why should you have a cat?</p>
      <p className={classes.description}>
        Having a cat around you can actually trigger the release of calming
        chemicals in your body which lower your stress and anxiety leves
      </p>
      <button className={classes.redirect}>READ MORE</button>
      <section className={classes.gallery}>
        <Image
          className={classes.img1}
          objectFit='contain'
          src='/image2.png'
          width={100}
          height={100}
        />
        <Image objectFit='contain' src='/image1.png' width={100} height={100} />
        <Image objectFit='contain' src='/image3.png' width={100} height={100} />
      </section>
    </article>
  );
};

export default Blog;
