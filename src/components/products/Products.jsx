import React from "react";
import Product from "../product/Product";
import { categories } from "../../constants/data";
import "./products.scss";

export default function Products() {
  return (
    <div className="directory-container">
      {categories.map(({ id, imageUrl, title }) => {
        return <Product key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
}
