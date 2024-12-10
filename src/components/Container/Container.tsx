
import { TCommentItem } from "../lib/type";
import FeedbackList from "./FeedbackList/FeedbackList";
import Header from "./Header/Header";

type ContainerProps = {
  errorMessage: string;
  isLoading: boolean;
  feedbackItems: TCommentItem[];
  onAddFeedbackToList: (message: string) => void
};

function Container({ feedbackItems, errorMessage, isLoading, onAddFeedbackToList }: ContainerProps) {
  return (
    <main className="container">
      <Header onAddFeedbackToList ={onAddFeedbackToList}/>
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}        
      />
    </main>
  );
}

export default Container