const server = import.meta.env.VITE_SERVER;

const userInfo = async (id: number) => {
  const response = await fetch(`${server}/.admin/users/${id}`);
  return response.json();
};

const userUpdate = async (id: number, username: string, password: string) => {
  const response = await fetch(`${server}/.admin/users/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, username, password }),
  });
  return response.json();
};

export { userInfo, userUpdate };
