import { PersonalProfile } from "@/model/personModel";
import { create } from "zustand";

type IProfileStoreState = {
  profiles: PersonalProfile[]; // Changed from profile to profiles
  setProfiles: (profiles: PersonalProfile[]) => void; // Updated setter function
};

export const usePersonStore = create<IProfileStoreState>((set) => ({
  profiles: [], // Initialize as an empty array
  setProfiles: (profiles) => set(() => ({ profiles })), // Update function to set profiles
}));

// export const usePersonStore = create<IProfileStoreState>((set) => ({
//   profile: {
//     _id: "",
//     fullname: "",
//     email: "",
//     phoneNumber: "",
//     presentAddress: "",
//     permanentAddress: "",
//   },

//   setProfile: (profile) => set(() => ({ profile })),
// }));
