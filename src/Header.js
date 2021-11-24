import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  laporan: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
    fontStyle: "bold",
  },
  label: {
    width: 150,
    fontSize: 18,
  },
  headcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "left",
    height: 24,
    textAlign: "left",
    fontStyle: "bold",
    marginTop: 5,
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
    fontFamily: "Helvetica-Oblique",
    fontStyle: "bold",
  },
  periode: {
    width: "10%",
    fontFamily: "Helvetica-Oblique",
    fontStyle: "bold",
  },
  totaal: {
    width: "30%",
    fontFamily: "Helvetica-Oblique",
    fontStyle: "bold",
    textAlign: "right",
    paddingRight: 10,
  },
});

const Header = ({ dataToPdf, namatoko, periode, jumlah }) => {
  {
    const header = dataToPdf && (
      <Fragment>
        <View style={styles.laporan}>
          <Text style={styles.label}>Laporan Penjualan</Text>
        </View>
        <View style={styles.headcontainer}>
          <Text style={styles.namaToko}> Nama Toko </Text>
          <Text style={styles.periode}> Periode </Text>
          <Text style={styles.totaal}>Total </Text>
        </View>
        <View style={styles.headrow}>
          <Text style={styles.namaToko}>{namatoko}</Text>
          <Text style={styles.periode}>{periode}</Text>
          <Text style={styles.totaal}>{jumlah}</Text>
        </View>
      </Fragment>
    );
    return <Fragment>{header}</Fragment>;
  }
};

export default Header;
