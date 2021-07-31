import classes from '../../scss/Search.module.scss';

const Search = () => {
  return (
    <section className={classes.wrapper}>
      <p className='material-icons'>close</p>
      <input
        placeholder='Enter your breed'
        type='text'
        className={classes.input}
      />
      <div className={classes.result}>
        <div className={classes.result_item}>
          <h2>RESULT</h2>
        </div>
      </div>
    </section>
  );
};

export default Search;
