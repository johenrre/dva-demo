import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(id) {
    const l = products.length
    const aa = {
      name: `test${l + 1}`,
      id: l + 1,
    }
    dispatch({
      type: 'products/add',
      payload: aa,
    });
  }
  console.log('test', products);
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
      <button onClick={handleAdd}>添加products</button>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);