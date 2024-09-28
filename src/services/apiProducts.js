import { BASE_URL } from "./baseUrl";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw Error("Failed getting products");

  const { data } = await res.json();
  return data;
}

export async function getSpecificProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw Error(`Failed getting product`);
  const { data } = await res.json();

  return data;
}
