import { DataGalleries } from "./data/DataGalleries";
import { LikeButton } from "./likeButton";
import { useState } from "react";

interface CardComponentProps {
  setLikedCount: React.Dispatch<React.SetStateAction<number>>;
  queryString: string;
}

export function CardComponent(props: CardComponentProps) {
  const [likedIndexArray, setLikedIndexArray] = useState<number[]>([]);

  const filteredData = DataGalleries.filter((data) => {
    return data.name.toLowerCase().includes(props.queryString.toLowerCase());
  });

  return (
    <div className="max-w-[1200px] flex flex-row flex-wrap justify-center gap-x-8 gap-y-8 mx-auto mt-4">
      {filteredData.map((item) => {
        return (
          <div
            className="w-max relative hover:scale-125 duration-500 hover:z-10"
            key={item.id}
          >
            <LikeButton
              setLikedCount={props.setLikedCount}
              id={item.id}
              likedIndexArray={likedIndexArray}
              setLikedIndexArray={setLikedIndexArray}
            />
            <img
              src={item.imageUrl}
              className="h-[270px] w-[200px] rounded-lg"
            />
            <h3 className="text-white text-xl w-[200px] mt-[-60px] text-center font-semibold">
              {item.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
