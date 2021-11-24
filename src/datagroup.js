import { Document, Page, StyleSheet, Text, Image, View } from "@react-pdf/renderer";
import React from "react";
import { numberWithCommas } from "./numberWithComma";
//img
import logo from "./img/tokokami.png";

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

  laporan: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  label: {
    width: 150,
    fontStyle: "bold",
    fontSize: 18,
  },
  image: {
    width: 80,
    height: 32,
    marginTop: 0,
  },
  headcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "left",
    height: 24,
    textAlign: "left",
    fontStyle: "bold",
    marginTop: 30,
  },
  headrow: {
    flexDirection: "row",
    alignItems: "left",
    height: 24,
    fontStyle: "bold",
    textAlign: "left",
  },
  namaToko: {
    width: "30%",
    fontStyle: "bold",
  },
  periode: {
    width: "auto",
    fontStyle: "bold",
  },
  headtotal: {
    width: "15%",
    fontStyle: "bold",
    marginLeft: 100,
  },
  totaal: {
    width: "auto",
    fontStyle: "bold",
    textAlign: "right",
    marginRight: 10,
    backgroundColor: "#9E9E9E",
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    marginTop: 5,
    backgroundColor: "#9E9E9E",
    border: "2px solid google-grey-500",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
    textAlign: "center",
  },

  noTrx: {
    width: "10%",
  },
  product: {
    width: "30%",
    textAlign: "left",
  },
  jumlah: {
    width: "10%",
  },

  harga: {
    width: "15%",
  },

  diskon: {
    width: "15%",
  },
  total: {
    width: "15%",
    marginLeft: 5,
  },

  footerTotal: {
    width: "15%",
    fontStyle: "bold",
  },
  descriptionTotal: {
    width: "85%",
    textAlign: "right",
    paddingRight: 10,
  },
});

const MyGroup = ({ dataToPdf, jumlah, namatoko, periode }) => {
  return (
    <>
      {dataToPdf && (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.laporan}>
              <Text style={styles.label}>Laporan Penjualan</Text>
            </View>
            <Image style={styles.image} src={logo} />
            <View style={styles.headcontainer}>
              <Text style={styles.namaToko}> Nama Toko </Text>
              <Text style={styles.periode}> Periode </Text>
              <Text style={styles.headtotal}>Total </Text>
              <Text style={styles.totaal}>Rp {numberWithCommas(jumlah)}</Text>
            </View>
            <View style={styles.headrow}>
              <Text style={styles.namaToko}>{namatoko}</Text>
              <Text style={styles.periode}>{periode}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.product}>Produk</Text>
              <Text style={styles.jumlah}>Jumlah</Text>
              <Text style={styles.harga}>Harga</Text>
              <Text style={styles.diskon}>Diskon</Text>
              <Text style={styles.total}>Total</Text>
            </View>
            {dataToPdf?.map((data, id) => {
              return (
                <View style={styles.row} key={id}>
                  <Text style={styles.product}>{data.productname}</Text>
                  <Text style={styles.jumlah}>{data.quantity}</Text>
                  <Text style={styles.harga}>Rp. {numberWithCommas(data.productprice)}</Text>
                  <Text style={styles.diskon}>{data.productdiscount}</Text>
                  <Text style={styles.total}>Rp. {numberWithCommas(data.totalproductprice)}</Text>
                </View>
              );
            })}
            <View style={styles.row}>
              <Text style={styles.descriptionTotal}>Total </Text>
              <Text style={styles.footerTotal}>Rp {numberWithCommas(jumlah)}</Text>
            </View>
          </Page>
        </Document>
      )}
    </>
  );
};
export default MyGroup;
