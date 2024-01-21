import Image from "next/image";
import styles from '@/app/ui/home.module.css';
 

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">hello nexj js</div>
    <h1 className="text-blue-500">I'm blue!</h1>
    <div
  className="h-0 w-0 border-b-[100px] border-l-[100px] border-r-[100px] border-b-black border-l-transparent border-r-transparent"
>
  {/* Learn how to use the standard and custom hooks of ReactJS to create a countdown timer. React Hooks are the cool thing from the library. */}
</div>
<div className={styles.shape}></div>
    </main>
  );
}
