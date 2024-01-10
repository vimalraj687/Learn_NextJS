import Link from "next/link";

const LearnLink = () => {
  const id = 1;
  return (
    <>
      <Link href="/admins/profile">Go To Admin Dashboard</Link>
      <Link href={`/blog/post/${id}`}>Go To Blog</Link>
      <Link href={`/profile/user/${id}`}>Go To My Profile</Link>
    </>
  );
};

export default LearnLink;
