import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data }: any = useSession();
  return (
    <>
      <h1>Profile Page</h1>
      <p>{data && data.user.fullname}</p>
    </>
  );
};

export default ProfilePage;
