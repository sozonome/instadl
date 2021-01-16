import { OwnerType } from "./post";

export type SingleProfileRes = {
  owner: ProfileOwnerType;
  posts: Array<ProfilePostType>;
};

type ProfileOwnerType = OwnerType & {
  isPrivate: boolean;
};

type ProfilePostType = {
  thumbnail: string;
  url: string;
  isMultipost: boolean;
};
