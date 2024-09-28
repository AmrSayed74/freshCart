import { BASE_URL } from "./baseUrl";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) throw Error("Failed getting categories");
  const { data } = await res.json();

  return data;
}
