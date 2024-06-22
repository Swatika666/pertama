// pages/index.tsx
import styles from './Home.module.css';
import Header from './components/header';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title1}>Software</h1>
          <h1 className={styles.title2}>Engineer.</h1>
          <p className={styles.description}>[Currently in Sleman]</p>
        </main>
        <h1 className={styles.titel}>Arya Eka</h1>
        <p className={styles.desk}>building software that just fits.</p>
        <div className={styles.imageContainer}>
          <img 
            src="https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2023/04/rekomendasi-anime-bernuansa-islamf9b8c483-9090-4ad8-98a4-838c4fb89c12.jpg" 
            alt="Yoks"
          />
        </div>
        <p className={styles.dek}>[me.png]</p>
      </div>
    </>
  );
};

export default Home;
