import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TCommentItem } from "../../lib/type";


type FeednackItemProps = {
  feedbackItem: TCommentItem
};

export const FeedbackItem = ({ feedbackItem }: FeednackItemProps) => {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.message}</p>
      </div>

      <p>{feedbackItem.dayAgo}d</p>
    </li>
  );
};
