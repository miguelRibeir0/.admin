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

const getProducts = async () => {
  const ans = await fetch(`${server}/.admin/products`);

  const data = await ans.json();

  return data;
};

export { newProduct, getProducts };
