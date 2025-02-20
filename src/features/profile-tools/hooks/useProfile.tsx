import { useEffect, useState } from "react";
import { Profile } from "../types/profile.model";
import { getProfileData } from "../api/profile";

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    const profile = getProfileData();
    setProfile(profile);
  }, []);

  return { profile };
};
