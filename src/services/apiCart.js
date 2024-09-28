import { BASE_URL } from "./baseUrl";

const headers = {
  "Content-Type": "application/json",
  token: localStorage.getItem("userToken"),
};

export async function addToCart(productId) {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    body: JSON.stringify({ productId }),
    headers,
  });
  if (!res.ok) {
    throw new Error("Failed to add product to cart");
  }
  const data = await res.json();

  return data;
}

export async function getCart() {
  const res = await fetch(`${BASE_URL}/cart`, {
    headers,
  });
  if (!res.ok) throw new Error("Failed to get cart items");
  const data = await res.json();

  return data;
}

export async function updateProductCount({ productId, count }) {
  const res = await fetch(`${BASE_URL}/cart/${productId}`, {
    method: "PUT",
    body: JSON.stringify({ count }),
    headers,
  });

  if (!res.ok) throw new Error("Failed to update product");

  const data = await res.json();

  return data;
}

export async function removeFromCart(productId) {
  const res = await fetch(`${BASE_URL}/cart/${productId}`, {
    method: "DELETE",

    headers,
  });
  if (!res.ok) {
    throw new Error("Failed to delete product to cart");
  }
  const data = await res.json();

  return data;
}

export async function clearCart() {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "DELETE",
    headers,
  });
  if (!res.ok) {
    throw new Error("Failed to clear  cart");
  }
  const data = await res.json();

  return data;
}

