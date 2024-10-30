import { PersonalProfile } from "@/model/personModel";
import { create } from "zustand";

type IProfileStoreState = {
  profiles: PersonalProfile[];
  setProfiles: (profiles: PersonalProfile[]) => void;
};

export const usePersonStore = create<IProfileStoreState>((set) => ({
  profiles: [],
  setProfiles: (profiles) => set(() => ({ profiles })),
}));
