import { useState } from "react";
import { newProduct } from "./fetchrequests";

type AddProductProps = {
  show: boolean;
  toggleShow: () => void;
  submitting: (value: boolean) => void;
};

const AddProduct: React.FC<AddProductProps> = ({
  show,
  toggleShow,
  submitting,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  // Get the current date and time
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const newDate = () => {
    return new Date().toLocaleString("en-US", options);
  };

  const productSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newProduct(name, price, quantity, status, newDate());
    setName("");
    setPrice("");
    setQuantity("");
    setStatus("");
    toggleShow();
    // so products on Products.tsx can be refetched
    setTimeout(() => submitting(true), 500);
  };

  return (
    <>
      {show ? (
        <div className="mb-10 rounded-lg bg-white p-5 shadow-md">
          <h1 className="mb-5 text-2xl font-bold">Add Product</h1>
          <form className="flex flex-col gap-5" onSubmit={productSubmit}>
            <input
              type="text"
              placeholder="Product Name"
              className="rounded-lg border-2 border-orange-200 p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Product Price €  ( max: 999.99€ )"
              className="rounded-lg border-2 border-orange-200 p-2"
              value={price}
              onChange={(e) => {
                // Allow up to 3 digits before the decimal and up to 2 digits after the decimal
                const regex = /^\d{0,3}(\.\d{0,2})?$/;
                if (regex.test(e.target.value)) {
                  setPrice(e.target.value);
                }
              }}
              required
            />
            <input
              type="text"
              placeholder="Product Quantity ( max: 1000 )"
              className="rounded-lg border-2 border-orange-200 p-2"
              value={quantity}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only up to 3 digits, first digit cannot be 0, or an empty string
                const regex = value === "" || /^[1-9]\d{0,2}$/.test(value);
                if (regex) {
                  setQuantity(value);
                }
              }}
              required
            />
            <select
              className="rounded-lg border-2 border-orange-200 p-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Draft">Draft</option>
              <option value="Active">Active</option>
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
    </>
  );
};

export default AddProduct;
