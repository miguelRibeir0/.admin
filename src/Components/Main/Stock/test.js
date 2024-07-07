const updateProduct = async (productId, pName, pPrice, pQuantity, pStatus) => {
  const ans = await fetch(
    `https://personal-server-miguel.xyz/.admin/products/update`,
    {
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
    },
  );

  const data = await ans.json();

  return data;
};

updateProduct(71, "live fetch 2", 340, 150, "Draft")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
