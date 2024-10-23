"use client";
import { PersonalProfile, profileSchema } from "@/model/personModel"; //
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePersonStore } from "../store/personInfoStore";

const base = "http://localhost:3000/api";
const saveProfileToApi = async (profile: PersonalProfile) => {
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
    return response.json();
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};
export default function useProfileForm() {
  const { setProfile } = usePersonStore();

  const form = useForm<PersonalProfile>({
    resolver: zodResolver(profileSchema),
    mode: "onSubmit",
  });

  const handleSaveProfile = async (params: PersonalProfile) => {
    try {
      const savedProfile = await saveProfileToApi(params);

      setProfile(savedProfile);
      console.log("Profile saved successfully!", savedProfile);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };
  // const onSubmit = form.handleSubmit(handleSaveProfile);
  const onSubmit = form.handleSubmit((data) => {
    console.log(
      "%c 🥜: useProfileForm -> data ",
      "font-size:16px;background-color:#68f74d;color:black;",
      data
    );
    handleSaveProfile(data);
  });

  return { form, onSubmit };
}
