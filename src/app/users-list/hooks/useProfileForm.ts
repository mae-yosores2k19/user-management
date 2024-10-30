"use client";
import { PersonalProfile, profileSchema } from "@/model/personModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePersonStore } from "../store/personInfoStore";
import {
  createUserProfile,
  updateUserProfile,
  getAllUsersProfile,
} from "@/app/actions/userProfile";
export default function useProfileForm(existingProfile?: PersonalProfile) {
  const { setProfiles } = usePersonStore();
  const form = useForm<PersonalProfile>({
    resolver: zodResolver(profileSchema),
    mode: "onSubmit",
    defaultValues: existingProfile || {
      fullname: "",
      email: "",
      phoneNumber: "",
      presentAddress: "",
      permanentAddress: "",
    },
  });

  const handleSaveProfile = async (params: PersonalProfile) => {
    try {
      let savedProfile;
      if (params._id) {
        savedProfile = await updateUserProfile(params);
      } else {
        savedProfile = await createUserProfile(params);
      }

      if (savedProfile) {
        const { users } = await getAllUsersProfile();
        setProfiles(users);
        form.reset();
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const onSubmit = form.handleSubmit((data) => {
    handleSaveProfile(data);
    form.reset();
  });

  return { form, onSubmit };
}
