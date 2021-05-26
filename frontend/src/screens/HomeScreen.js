import React from 'react';
import Product from '../component/Product';
import data from '../Data';

export default function HomeScreen() {
    return (
        <div>
        <div className="row center">
          {data.products.map((product => (
            <Product key={product._id} product={product}></Product>
          ))
          )}

        </div>
        </div>
    );
}
