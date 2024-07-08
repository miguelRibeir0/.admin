import { useState, useEffect } from "react";
import { updateProduct } from "./fetchrequests";

type ProductEdit = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  productId: number;
  pName: string;
  pPrice: number;
  pQuantity: number;
  pStatus: string;
  submitting: (value: boolean) => void;
};

const ProductEdit: React.FC<ProductEdit> = ({
  isOpen,
  setIsOpen,
  productId,
  pName,
  pPrice,
  pQuantity,
  pStatus,
  submitting,
}) => {
  const [zIndex, setZIndex] = useState("z-10");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  // Updating the default values
  useEffect(() => {
    setName(pName);
    setPrice(pPrice.toString());
    setQuantity(pQuantity.toString());
    setStatus(pStatus);
  }, [pName, pPrice, pQuantity, pStatus, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      // setting z-index to -z-10 after the bar is closed
      const timeoutId = setTimeout(() => setZIndex("-z-10"), 500);
      return () => clearTimeout(timeoutId);
    } else {
      // setting z-index to z-10 when sidebar is opened
      setZIndex("z-10");
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={`fixed left-0 top-0 ${zIndex} h-screen w-full bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setIsOpen(false)}
      />
      {isOpen ? (
        <div className="fixed left-1/2 top-1/2 z-30 mt-10 flex h-4/6 w-3/4 -translate-x-1/2 -translate-y-1/2 transform justify-center border-2 border-orange-500 bg-white lg:w-2/5">
          <form
            className="flex h-full w-5/6 flex-col items-center justify-center gap-7 lg:gap-y-10"
            onSubmit={(e) => {
              e.preventDefault();
              updateProduct(
                productId,
                name,
                Number(price),
                Number(quantity),
                status,
              );
              setIsOpen(false);
              // So products on Products.tsx can be refetched
              setTimeout(() => submitting(true), 500);
            }}
          >
            <h2 className="mb-5 text-2xl font-bold lg:text-4xl">
              Edit Product
            </h2>
            <input
              type="text"
              placeholder="Product Name"
              className="w-3/4 rounded-lg border-2 border-orange-300 p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Product Price €  ( max: 999.99€ )"
              className="w-3/4 rounded-lg border-2 border-orange-300 p-2"
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
              className="w-3/4 rounded-lg border-2 border-orange-300 p-2"
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
              className="w-3/4 rounded-lg border-2 border-orange-200 p-2"
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
              className="rounded-lg bg-orange-500 p-3 font-bold text-white transition-all duration-300 ease-in-out hover:bg-orange-400"
            >
              Edit Product
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default ProductEdit;
