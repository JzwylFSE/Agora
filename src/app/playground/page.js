"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Header/Navbar";

export default function Playground() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/navbar">Navbar</Link>
        <Link href="/playground">Playground</Link>

        {/* <Navbar sectionTitle="playground" /> */}
      </nav>

      <Navbar sectionTitle="playground"></Navbar>
    </>
  );
}
