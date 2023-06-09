import { DataGalleries } from "../../data/DataGalleries";
import { CountLikeGallery } from "./CountLikeGallery";
import { Title } from "./Title";

export const Header = () => {
  const likeGalleryCount = DataGalleries.filter((DataGalleries) => DataGalleries.isLiked).length;
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Title />
        <CountLikeGallery count={likeGalleryCount} />
        <h2 className="mt-4 text-3xl font-semibold text-black">"Explore a collection of awe-inspiring and uniquely designed structures."</h2>
        {/* <SearchBar /> */}
      </div>
    </div>
  );
};
