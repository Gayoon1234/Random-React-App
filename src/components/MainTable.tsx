import React, { Component } from 'react';
import '../styles/MainTable.css';
import Link from 'next/link';
export default class MainTable extends Component {
  handleHello = () => {
    
  };

  render() {
    return (
      <table className='font-sans'>
        <tbody>
          <tr>
            <td><Link href="/HelloWorld">Book Cover Generator</Link></td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
