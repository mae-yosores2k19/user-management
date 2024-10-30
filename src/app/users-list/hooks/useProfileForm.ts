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
        // Fetch and set all user profiles after saving
        const { users } = await getAllUsersProfile(); // Assuming this returns { users: [...] }
        setProfiles(users); // Update the profiles in the store
        form.reset(); // Reset form after saving
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
// const form = useForm<PersonalProfile>({
//   resolver: zodResolver(profileSchema),
//   mode: "onSubmit",
// });

// const handleSaveProfile = async (params: PersonalProfile) => {
//   try {
//     const savedProfile = await createUserProfile(params);

//     setProfile(savedProfile);
//     console.log("Profile saved successfully!", savedProfile);
//   } catch (error) {
//     console.error("Error saving profile:", error);
//   }
// };
// const onSubmit = form.handleSubmit((data) => {
//   handleSaveProfile(data);
// });

// return { form, onSubmit };
