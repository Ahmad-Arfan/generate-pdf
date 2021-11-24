import React from "react";
import { Container, Form, Col, Row, FormGroup } from "react-bootstrap";
import { BlobProvider, Page, Text, View, Document, StyleSheet, PDFViewer, Image } from "@react-pdf/renderer";
import Papa from "papaparse";
import MyDoc from "./data";
//img
import logo from "./img/tokokami.png";
import { numberWithCommas } from "./numberWithComma";
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
    width: 74,
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
    width: "10%",
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

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namatoko: "",
      periode: "",
      parsedCsvData: [],
      dataToPdf: null,
      jumlah: 0,
    };
    this.updateData = this.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnFileLoad = (data) => {
    this.setState({ parsedCsvData: data.target.files[0] });
  };

  updateData = (result) => {
    var data = result.data;
    let finalData = [];

    //code here
    //if data[0].productname same with data[2].productname then combine data into one value

    {
      data.map((res) => {
        this.state.jumlah += Number.parseInt(res.totalproductprice);
        if (this.state.namatoko.toLowerCase() == res.seller.toLowerCase()) {
          finalData.push(res);
        }
      });
    }
    this.setState({
      dataToPdf: finalData,
    });
  };

  generatePDF = (e, url) => {
    e.preventDefault();
    const newWindow = window.open(url, "_blank", "noopener");
    if (newWindow) newWindow.opener = null;
    const { parsedCsvData } = this.state;
    Papa.parse(parsedCsvData, {
      delimiter: "",
      complete: this.updateData,
      header: true,
    });
  };

  render() {
    return (
      <>
        <Container>
          <h1 className="my-4 font-weight-bold .display-4" textAlign="center">
            Sales Report
          </h1>
          <Form className="form" autoComplete="off">
            <Col>
              <label>Nama Toko</label>
              <FormGroup>
                <Row>
                  <Col>
                    <input type="text" name="namatoko" value={this.state.namatoko} onChange={this.handleChange} />
                  </Col>
                </Row>
              </FormGroup>
              <label>Periode</label>
              <FormGroup>
                <Row>
                  <Col>
                    <input type="text" name="periode" value={this.state.periode} onChange={this.handleChange} />
                  </Col>
                </Row>
              </FormGroup>
              <br />

              <FormGroup>
                <Row>
                  <Col>
                    <label></label>
                    <input type="file" accept=".csv" id="csvFile" onChange={this.handleOnFileLoad} />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Form>
        </Container>
        <br />

        <BlobProvider type="application/pdf" document={<MyDoc dataToPdf={this.state.dataToPdf} namatoko={this.state.namatoko} periode={this.state.periode} jumlah={this.state.jumlah} />}>
          {({ url }) => {
            console.log("URL : ", url);
            return (
              <>
                <a className="button" href={url} target="_blank" rel="noopener noreferrel">
                  <button
                    onClick={this.generatePDF}
                    className="btn btn-primary"
                    style={{
                      marginTop: 1,
                      marginLeft: 310,
                    }}
                  >
                    EXPORT TO PDF
                  </button>
                </a>
              </>
            );
          }}
        </BlobProvider>

        <br />
        {this.state.dataToPdf && (
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <Document name={this.state.namatoko}>
              <Page size="A4" style={styles.page}>
                <View style={styles.laporan}>
                  <Text style={styles.label}>Laporan Penjualan</Text>
                </View>
                <Image style={styles.image} src={logo} />
                <View style={styles.headcontainer}>
                  <Text style={styles.namaToko}> Nama Toko </Text>
                  <Text style={styles.periode}> Periode </Text>
                  <Text style={styles.headtotal}>Total </Text>
                  <Text style={styles.totaal}>Rp {numberWithCommas(this.state.jumlah)}</Text>
                </View>
                <View style={styles.headrow}>
                  <Text style={styles.namaToko}>{this.state.namatoko}</Text>
                  <Text style={styles.periode}>{this.state.periode}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.noTrx}>No.Trx</Text>
                  <Text style={styles.product}>Produk</Text>
                  <Text style={styles.jumlah}>Jumlah</Text>
                  <Text style={styles.harga}>Harga</Text>
                  <Text style={styles.diskon}>Diskon</Text>
                  <Text style={styles.total}>Total</Text>
                </View>
                {this.state.dataToPdf?.map((data, id) => {
                  return (
                    <View style={styles.row} key={id}>
                      <Text style={styles.noTrx}>{data.orderid}</Text>
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
                  <Text style={styles.footerTotal}>Rp {numberWithCommas(this.state.jumlah)}</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        )}
      </>
    );
  }
}

export default Report;
