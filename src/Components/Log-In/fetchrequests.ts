const users = async () => {
  const ans = await fetch(`http://localhost:4242/.admin/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await ans.json();

  return data;
};

const newUser = async (username: string, password: string) => {
  const ans = await fetch(`http://localhost:4242/.admin/users/new`, {
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
  user: string;
  password: string;
}

const fetchUserList = async (): Promise<userList[]> => {
  const getUsers: userList[] = await users();
  return getUsers;
};

export { newUser, fetchUserList };
