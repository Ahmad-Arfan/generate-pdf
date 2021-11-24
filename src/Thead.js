import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
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

  noTrx: {
    width: "10%",
  },
  product: {
    width: "30%",
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
});

const Thead = () => (
  <View style={styles.container}>
    <Text style={styles.noTrx}>No.Trx</Text>
    <Text style={styles.product}>Produk</Text>
    <Text style={styles.jumlah}>Jumlah</Text>
    <Text style={styles.harga}>Harga</Text>
    <Text style={styles.diskon}>Diskon</Text>
    <Text style={styles.total}>Total</Text>
  </View>
);

export default Thead;
