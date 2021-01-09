export type PostRes = {
  post: Array<MediaType>;
  owner: OwnerType;
};

export type MediaType = {
  url: string;
  is_video: boolean;
};

export type OwnerType = {
  username: string;
  fullName: string;
  profilePicUrl: string;
};
