import { useState } from "react";
import Nav from "../Nav";
import PageTitle from "../PageTitle";
import Products from "./Products";

const Stock = () => {
  const [productForm, setProductForm] = useState(false);

  return (
    <div>
      <Nav />
      <div className="h-20 w-screen" /> {/* nav filler */}
      <PageTitle title="Stock" />
      <section className="m-10 flex flex-wrap justify-center gap-8">
        <div className="w-full">
          <div className="mb-10 flex gap-x-5 text-sm">
            <button
              className="rounded-lg border-2 border-orange-500 p-3 font-bold transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
              onClick={() => setProductForm(!productForm)}
            >
              Add Product
            </button>
          </div>
          {productForm ? (
            <div className="mb-10 rounded-lg bg-white p-5 shadow-md">
              <h1 className="mb-5 text-2xl font-bold">Add Product</h1>
              <form className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="rounded-lg border-2 border-orange-200 p-2"
                />
                <input
                  type="text"
                  placeholder="Product Price"
                  className="rounded-lg border-2 border-orange-200 p-2"
                />
                <input
                  type="number"
                  min={0}
                  max={1000}
                  placeholder="Product Quantity"
                  className="rounded-lg border-2 border-orange-200 p-2"
                />
                <select className="rounded-lg border-2 border-orange-200 p-2">
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="1">Draft</option>
                  <option value="2">Active</option>
                </select>
                <button
                  type="submit"
                  className="rounded-lg bg-orange-500 p-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-orange-400"
                >
                  Add Product
                </button>
              </form>
            </div>
          ) : null}
          <Products />
        </div>
      </section>
    </div>
  );
};

export default Stock;
