import { useState } from "react";
import LoadingSpinner from "../../../../components/LoadingSpinner";

type ItemImageType = {
  image: string;
};

export default function ItemImage({ image }: ItemImageType) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {isLoading && (
        <div className="w-80 h-80">
          <LoadingSpinner />
        </div>
      )}
      <img
        src={image}
        alt="Missing Image"
        className={`block object-fit w-80 h-80 bg-gray-100 ${
          isLoading ? `opacity-0` : `opacity-100`
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </>
  );
}
