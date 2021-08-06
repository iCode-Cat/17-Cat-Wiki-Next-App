import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/CatwikiLogo.svg';
import LogoLight from '../public/Light.svg';
import style from '../scss/Layout.module.scss';

const layout = (props) => {
  return (
    <>
      <header className={style.header}>
        <Link href='/'>
          <a>
            <Image width='128px' src={Logo} alt='cat-wiki-logo' />
          </a>
        </Link>
      </header>
      {props.children}
      <footer className={style.footer}>
        <section className={style.wrapper}>
          <Image width='128px' src={LogoLight} alt='cat-wiki-logo' />
          <p>© created by iCode-Cat</p>
        </section>
      </footer>
    </>
  );
};

export default layout;
