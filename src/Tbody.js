import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
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

const Tbody = ({ dataToPdf }) => {
  const row = dataToPdf?.map((data, id) => {
    <View style={styles.row} key={id}>
      <Text style={styles.noTrx}>{data.orderid}</Text>
      <Text style={styles.product}>{data.productname}</Text>
      <Text style={styles.jumlah}>{data.quantity}</Text>
      <Text style={styles.harga}>{data.productprice}</Text>
      <Text style={styles.diskon}>{data.productdiscount}</Text>
      <Text style={styles.total}>{data.totalproductprice}</Text>
    </View>;
  });
  return <Fragment>{row}</Fragment>;
};

export default Tbody;
