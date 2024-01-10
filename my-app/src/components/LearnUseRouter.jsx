"use client";
import { useRouter } from "next/navigation";
const LearnUseRouter = () => {
  const router = useRouter();
  //   console.log(router, "vim");
  return (
    <>
      <div>LearnUseRouter</div>;
      <button type="button" onClick={() => router.push("/admins/dashboard")}>
        Go To Dashboard
      </button>
    </>
  );
};

export default LearnUseRouter;
