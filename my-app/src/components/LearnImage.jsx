import Image from "next/image";
import myImage from "../../public/images/gallery_2.png";
const LearnImage = () => {
  return (
    <>
      <Image src={myImage} />
      <div>Learn Image</div>
    </>
  );
};

export default LearnImage;
