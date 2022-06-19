import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from "react";
import ReactDOM from "react-dom";

const Home: NextPage = () => {
  const x = 10;
  return (
    <>
      <h1>Hello, World!</h1>
      <p>second line here! {x * 20}</p>
    </>
  );
}

export default Home;
