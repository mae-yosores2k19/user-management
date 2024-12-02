import { PersonalProfile } from "@/model/personModel";

const base = "http://localhost:3000/api";

export const getAllUsersProfile = async () => {
  try {
    const res = await fetch(`${base}/personInfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Users");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createUserProfile = async (profile: PersonalProfile) => {
  try {
    const response = await fetch(`${base}/personInfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    if (!response.ok) {
      throw new Error("Failed to save profile");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

export const updateUserProfile = async (profile: PersonalProfile) => {
  const response = await fetch(`${base}/personInfo/${profile._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });
  if (!response.ok) {
    throw new Error("Failed to update profile");
  }
  const data = await response.json();
  return data;
};

export const getUserProfileById = async (id: string) => {
  try {
    const res = await fetch(`${base}/personInfo/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch User");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${base}/personInfo?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to Delete User");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
