interface LikeCounterProps {
  likedCount: number;
}
export function LikeCounter(props: LikeCounterProps) {
  return (
    <div className="fixed top-0 right-0 bg-black px-4 py-2 rounded-bl-2xl">
      <span className="text-white text-base">
        {props.likedCount == 0
          ? "You haven't found any gallery to like yet."
          : `My Favorite Galleries (${props.likedCount})`}
      </span>
    </div>
  );
}
