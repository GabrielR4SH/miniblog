import React from 'react';
import './About.module.css';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste em um blog feito com react no Front-End e firebase no Back-End</p>
        <Link to="/posts/create" className="btn">
          Criar post
        </Link>
    </div>
  )
}

export default About