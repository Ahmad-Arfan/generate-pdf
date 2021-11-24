import { Document, Page, StyleSheet, Image } from "@react-pdf/renderer";
import React from "react";

//Components
import Data from "./data";
import Header from "./Header";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Footer from "./Footer";
//img
import logo from "./img/tokokami.jpg";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  image: {
    width: 74,
    height: 32,
    marginTop: 0,
  },
});

const Invoice = ({ dataToPdf, namatoko, periode, jumlah }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.image} src={logo} />
      <Header dataToPdf={dataToPdf} namatoko={namatoko} periode={periode} jumlah={jumlah} />
      <Thead />
      <Tbody dataToPdf={dataToPdf} />
      <Footer dataToPdf={dataToPdf} jumlah={jumlah} />
    </Page>
  </Document>
);

export default Invoice;
