import React, { PureComponent } from 'react';
import { Document, Page } from 'react-pdf'

export default class ResumePDF extends PureComponent{
  render(){
    return(
      <div>
        <Document
          file="Resume_JesusMartinez.pdf"
        >
          <Page pageNumber={1}/>
        </Document>
      </div>
    );
  }
}
