import Image from 'next/image';
import router from 'next/router';
import classes from '../scss/TopSearch.module.scss';
const TopSearch = ({ topSearchs }) => {
  return (
    <section className={classes.wrapper}>
      <p className={classes.title}>Most Searched Breeds</p>
      <p className={classes.desc}>66+ Breeds For you to discover</p>
      <p
        onClick={() => router.push('/cats/popular')}
        className={classes.navigate}
      >
        SEE MORE...
      </p>
      <div className={classes.images}>
        {topSearchs.slice(0, 4).map((item) => (
          <div key={item._id} className={classes.item}>
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className={classes.image}
            ></div>
            <figcaption>{item.name}</figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSearch;
