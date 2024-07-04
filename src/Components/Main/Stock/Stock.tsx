import { useState } from "react";
import Nav from "../Nav";
import PageTitle from "../PageTitle";
import Products from "./Products";
import AddProduct from "./AddProduct";

const Stock = () => {
  const [productForm, setProductForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleShowAddProduct = () => setProductForm(false);

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
          <AddProduct
            show={productForm}
            toggleShow={toggleShowAddProduct}
            submitting={setSubmitted}
          />
          <Products submitted={submitted} submitting={setSubmitted} />
        </div>
      </section>
    </div>
  );
};

export default Stock;
