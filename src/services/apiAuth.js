import { BASE_URL } from "./baseUrl";

export async function signup(values) {
  try {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function login(values) {
  const res = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || `${res.status}`);
  }

  const data = await res.json();

  return data;
}

export async function forgetPassword(email) {
  const res = await fetch(`${BASE_URL}/auth/forgotPasswords`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || `${res.status}`);
  }
  const data = await res.json();

  return data;
}

export async function verifyCode(resetCode) {
  const res = await fetch(`${BASE_URL}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify({ resetCode }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || `${res.status}`);
  }
  const data = await res.json();

  return data;
}

export async function resetPassword(values) {
  const res = await fetch(`${BASE_URL}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || `${res.status}`);
  }
  const data = await res.json();

  return data;
}
