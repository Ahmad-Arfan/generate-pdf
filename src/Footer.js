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

const Footer = (dataToPdf, jumlah) => {
  {
    dataToPdf?.map(() => {
      <View style={styles.row}>
        <Text style={styles.descriptionTotal}>Total </Text>
        <Text style={styles.footerTotal}>{jumlah}</Text>
      </View>;
    });
  }
};

export default Footer;
