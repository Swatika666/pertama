'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Posts.module.css';
import Header from '../components/header';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Posts = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const username = 'Swatika666'; // Ganti dengan username GitHub yang sesuai

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        setRepositories(response.data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {repositories.map(repo => (
          <div key={repo.id} className={styles.post}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
