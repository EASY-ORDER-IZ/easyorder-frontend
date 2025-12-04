import CommentCard from './CommentCard';
import { reviews } from './CardData';

const CommentSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-359 flex-col items-center gap-6">
        <h1 className="text-h1 text-text-400 text-center font-extrabold tracking-[1px] capitalize">
          What Our Happy Users Say!
        </h1>

        <p className="text-h4 text-text-400 text-center">
          Smarter shopping, faster deals, and endless style — here's why FirstChance is your
          ultimate shopping destination.
        </p>

        <div className="no-scrollbar relative flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth p-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex min-w-[80%] flex-shrink-0 cursor-pointer snap-center flex-col gap-3 sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%]"
            >
              <CommentCard name={review.name} rating={review.rating} review={review.review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
