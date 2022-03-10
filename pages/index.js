import React from "react";
import Head from "next/head";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import Home from "./Home";
import App from "next/app";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Construsonho Engenharia</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:wght@500&family=Open+Sans&family=Playfair+Display:wght@500&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Content>
          <App Component={Home}/>
        </Content>
      </Layout>
    </>
  );
}
