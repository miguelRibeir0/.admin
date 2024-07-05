const server = import.meta.env.VITE_SERVER;

const users = async () => {
  const ans = await fetch(`${server}/.admin/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await ans.json();

  return data;
};

const newUser = async (username: string, password: string) => {
  const ans = await fetch(`${server}/.admin/users/new`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await ans.json();

  return data;
};

interface userList {
  id: number | string;
  username: string;
  password: string;
}

const fetchUserList = async (): Promise<userList[]> => {
  const getUsers: userList[] = await users();
  return getUsers;
};

export { newUser, fetchUserList };
