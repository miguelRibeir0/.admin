import { useState, useEffect } from "react";
import { deleteProduct } from "./fetchrequests";

type DeleteProductProps = {
  productId: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  submitting: (value: boolean) => void;
};

const ProductDelete: React.FC<DeleteProductProps> = ({
  productId,
  isOpen,
  setIsOpen,
  submitting,
}) => {
  const [zIndex, setZIndex] = useState("z-10");

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
      <div className="fixed left-1/2 top-1/2 z-30 flex w-3/4 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-5 border-2 border-orange-500 bg-white pb-10 pt-10 lg:w-2/5 lg:pb-16 lg:pt-16 dark:border-gray-100 dark:border-opacity-50 dark:bg-neutral-950 dark:text-slate-50">
        <h3 className="mb-5 w-3/4 text-center text-2xl font-bold">
          Are you sure you want to delete this product?
        </h3>
        <form
          className="flex gap-x-5"
          onSubmit={(e) => {
            e.preventDefault();
            deleteProduct(productId);
            setIsOpen(false);
            // So products on Products.tsx can be refetched
            setTimeout(() => submitting(true), 500);
          }}
        >
          <button
            type="submit"
            className="rounded-lg border-2 border-orange-500 p-3 px-7 font-bold transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
          >
            Yes
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-orange-500 bg-orange-500 p-3 px-7 font-bold text-white transition duration-300 ease-in-out hover:bg-orange-300"
            onClick={() => setIsOpen(false)}
          >
            No
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductDelete;
