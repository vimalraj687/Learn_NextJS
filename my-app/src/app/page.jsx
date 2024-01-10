import LearnClientComponent from "@/components/LearnClientComponent";
import LearnDataFeatching from "@/components/LearnDataFeatching";
import LearnImage from "@/components/LearnImage";
import LearnLink from "@/components/LearnLink";
import LearnModulecss from "@/components/LearnModulecss";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseRouter from "@/components/LearnUseRouter";
import LearnuseGlobal from "@/components/LearnuseGlobal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnServerComponent /> */}
      {/* <LearnClientComponent /> */}
      {/* <LearnuseGlobal /> */}
      {/* <LearnModulecss /> */}
      {/* <LearnImage /> */}
      <LearnDataFeatching />
    </main>
  );
}
