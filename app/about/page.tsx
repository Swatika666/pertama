import styles from './About.module.css';
import Header from '../components/header';

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img
          src="https://i.pinimg.com/736x/90/b6/8f/90b68f425c36fa6731e4ccc4562a7c93.jpg"
          alt="Trading Card"
          className={styles.card}
        />
        <div className={styles.description}>
          <h2>Aryoksss</h2>
          <p>
            codes software, usually sequentially, writing them to standard
            output...
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
