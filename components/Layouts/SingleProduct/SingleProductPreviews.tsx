import Image from "next/image";
import { useState } from "react";

interface SingleProductPreviewsProps {
  frontLarge: string;
  frontSmall: string;
  backLarge: string;
  backSmall: string;
  tshirtName: string;
}

const SingleProductPreviews = ({
  backLarge,
  backSmall,
  frontLarge,
  frontSmall,
  tshirtName,
}: SingleProductPreviewsProps) => {
  const [currentImage, setCurrentImage] = useState(frontLarge);

  return (
    <div className="mt-16">
      <Image src={currentImage} width={520} height={520} alt={tshirtName} />
      <div className="flex mx-8 mt-2 lg:justify-center">
        <div className="w-20 border text-center cursor-pointer">
          <Image
            onClick={() => setCurrentImage(frontLarge)}
            src={frontSmall}
            priority={true}
            width={70}
            height={70}
            alt={tshirtName}
          />
        </div>
        {backSmall && (
          <div className="w-20 border text-center ml-4 cursor-pointer">
            <Image
              onClick={() => setCurrentImage(backLarge)}
              src={backSmall}
              width={70}
              height={70}
              alt={tshirtName}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default SingleProductPreviews;
