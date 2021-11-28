import React from 'react';
import styles from './Reservations.module.css'

const Reservations = () => {
  return(
    <div className={styles.container}>
      <h2 className={styles.title}>My Cars Reservations</h2>

      <p ></p>

      <table>
        <caption className={styles.subtitle}>This is a list of all the cars you have reserve</caption>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>20</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Destornillador</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Llave inglesa</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Martillo</td>
            <td>1</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Reservations;
