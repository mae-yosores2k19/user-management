import { PersonalProfile } from "@/model/personModel";
import { create } from "zustand";

type IProfileStoreState = {
  profile: PersonalProfile;
  setProfile: (profile: PersonalProfile) => void;
};

export const usePersonStore = create<IProfileStoreState>((set) => ({
  profile: {
    id: "",
    fullname: "",
    email: "",
    phoneNumber: "",
    presentAddress: "",
    permanentAddress: "",
  },

  setProfile: (profile) => set(() => ({ profile })),
}));
