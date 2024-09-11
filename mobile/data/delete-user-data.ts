export async function DeleteUser(id: string) {
  const response = await fetch(`http://192.168.1.12:3000/user/${id}`, {
    method: "DELETE",
  });

  return await response.json();
}
