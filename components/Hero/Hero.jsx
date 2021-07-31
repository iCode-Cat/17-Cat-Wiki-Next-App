import { useState, useEffect } from 'react';
import style from '../../scss/Hero.module.scss';
import Image from 'next/image';
import Logo from '../../public/Light.svg';
import Search from './Search';
const Hero = () => {
  const [placeholder, setPlaceholder] = useState('Search');
  const placeholderHandler = () => {
    const windowSize = window.innerWidth;
    if (windowSize < 800) {
      setPlaceholder('Search');
      return;
    }
    setPlaceholder('Enter Your Breed');
  };

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
        <input placeholder={placeholder} type='text' />
        <span className='material-icons'>search</span>
        {/* <Search /> */}
      </div>
    </section>
  );
};

export default Hero;
