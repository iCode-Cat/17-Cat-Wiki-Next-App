import classes from '../../scss/Search.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';
const Search = ({ popupToggle, dispatch, cats, setSearchWord, searchWord }) => {
  const router = useRouter();
  const updateSearchStat = async (id) => {
    try {
      const post = await axios.post(`http://localhost:3001/api/cats/stats`, {
        id,
      });
      router.push('/cats/' + id.toLowerCase().replace(/ /g, '_'));
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <section className={classes.wrapper}>
      <p
        onClick={() => dispatch(popupToggle())}
        className={`material-icons ${classes.icon} `}
      >
        close
      </p>
      <input
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder='Enter Your Breed'
        type='text'
        className={classes.input}
      />
      <div className={classes.result}>
        {cats &&
          cats
            .filter((cat) =>
              cat.name.toLowerCase().includes(searchWord.toLowerCase())
            )
            .map((cat) => (
              <p
                key={cat.id}
                onClick={() => updateSearchStat(cat.name)}
                className={classes.result_item}
              >
                {cat.name}
              </p>
            ))}
      </div>
    </section>
  );
};

export default Search;
