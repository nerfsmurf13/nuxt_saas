export const useUtils = () => {
  const checkUser = (user) => {
    if (!user) {
      console.log("User not found");
    }
    console.log(`User '${user}' found`);
    
  };
  return { checkUser };
};
