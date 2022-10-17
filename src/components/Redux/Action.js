export const AddNewPost = (newPost) => {
  return {
    type: "ADD_NEW_POST",
    payload: newPost,
  };
};

export const AddNewProfile = (newProfile) => {
  return {
    type: "ADD_NEW_PROFILE",
    payload: newProfile,
  };
};
