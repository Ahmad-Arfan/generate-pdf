import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import MyDoc from "./data";
const Submit = ({ dataToPdf }) => (
  <BlobProvider document={<MyDoc dataToPdf={this.state.dataToPdf} namatoko={this.state.namatoko} periode={this.state.periode} jumlah={this.state.jumlah} />}>
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
              }}
            >
              EXPORT TO PDF
            </button>
          </a>
        </>
      );
    }}
  </BlobProvider>
);

export default Submit;
