import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Component Mount
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    await api.get(`/products`).then(products => {
      setProducts(products.data)
    })
  }

  return (
    <div>
      All Product Listed Here
      <table border="1">
        <tr>
          <td>Title</td>
          <td>description</td>
          <td>Action</td>
        </tr>
        {
          products.map(product => {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.description}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Products

/**
 * ComponentDidMount
 * ComponentDidUpdate
 * ComponentUnMount
 * 
 * useEffect
 * 
 */