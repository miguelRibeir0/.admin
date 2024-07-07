const server = import.meta.env.VITE_SERVER;

const newProduct = async (
  name: string,
  price: string,
  quantity: string,
  status: string,
  date: string,
) => {
  const ans = await fetch(`${server}/.admin/products/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      quantity,
      status,
      date,
    }),
  });

  const data = await ans.json();

  return data;
};

const getDefaultProducts = async () => {
  const ans = await fetch(`${server}/.admin/products`);

  const data = await ans.json();

  return data;
};

const insertUserProducts = async (userId: number | null, productId: number) => {
  const ans = await fetch(`${server}/.admin/user-products/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userId,
      productId,
    }),
  });

  const data = await ans.json();

  return data;
};

const getUSerProducts = async (userId: number) => {
  const ans = await fetch(`${server}/.admin/user-products/${userId}`);

  const data = await ans.json();

  return data;
};

const updateProduct = async (
  productId: number,
  pName: string,
  pPrice: number,
  pQuantity: number,
  pStatus: string,
) => {
  console.log("fetching");
  const ans = await fetch(`${server}/.admin/products/update`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId,
      pName,
      pPrice,
      pQuantity,
      pStatus,
    }),
  });

  const data = await ans.json();

  return data;
};

const deleteProduct = async (productId: number) => {
  const ans = await fetch(`${server}/.admin/products/delete`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId,
    }),
  });

  const data = await ans.json();

  return data;
};

export {
  newProduct,
  getDefaultProducts,
  insertUserProducts,
  getUSerProducts,
  updateProduct,
  deleteProduct,
};
