import { useState, useEffect } from 'react';
import style from '../../scss/Hero.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatList, popupToggle } from '../../redux/searchSlice';
import Image from 'next/image';
import Logo from '../../public/Light.svg';
import Search from './Search';
const Hero = () => {
  const [placeholder, setPlaceholder] = useState('Search');
  const [searchWord, setSearchWord] = useState('');
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const placeholderHandler = (e) => {
    const windowSize = window.innerWidth;
    if (windowSize < 800) {
      setPlaceholder('Search');
      return;
    }
    setPlaceholder('Enter Your Breed');
  };

  useEffect(() => {
    dispatch(fetchCatList());
  }, [dispatch]);

  useEffect(() => {
    // Run Once
    placeholderHandler();
    // Run on every resize
    window.addEventListener('resize', placeholderHandler);
  }, []);

  return (
    <section
      style={{ background: 'url("/Herolg.png")' }}
      className={style.section}
    >
      <Image width='80px' className={style.logo} src={Logo} alt='logo-second' />
      <p className={style.description}>Get to know more about your cat breed</p>
      <div className={style.search}>
        <input
          onChange={(e) => setSearchWord(e.target.value)}
          onClick={() => {
            dispatch(popupToggle());
          }}
          placeholder={placeholder}
          type='text'
        />
        <span className='material-icons'>search</span>
        {state.popup && (
          <Search
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            cats={state.cats}
            dispatch={dispatch}
            popupToggle={popupToggle}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
