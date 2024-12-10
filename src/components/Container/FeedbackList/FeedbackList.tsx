import { FeedbackItem } from "./FeedbackItem";
import { Spinner } from "../../Spinner";
import ErrorMessage from "../../ErrorMessage";
import { TCommentItem } from "../../lib/type";



// const fakeFeedbackItems: Comment[] = [
//   {
//     upvoteCount: 123,
//     badgeLetter: "A",
//     compagnyName: "Apple",
//     message: "Great post!",
//     dayAgo: 1,
//   },
//   {
//     upvoteCount: 456,
//     badgeLetter: "B",
//     compagnyName: "Burger King",
//     message: "I totally agree!",
//     dayAgo: 2,
//   },
//   {
//     upvoteCount: 789,
//     badgeLetter: "C",
//     compagnyName: "Coca-Cola",
//     message: "Interesting perspective.",
//     dayAgo: 3,
//   },
//   {
//     upvoteCount: 321,
//     badgeLetter: "D",
//     compagnyName: "Dunkin",
//     message: "Thanks for sharing!",
//     dayAgo: 4,
//   },
//   {
//     upvoteCount: 654,
//     badgeLetter: "E",
//     compagnyName: "Etsy",
//     message: "Well written!",
//     dayAgo: 5,
//   },
//   {
//     upvoteCount: 987,
//     badgeLetter: "F",
//     compagnyName: "Facebook",
//     message: "Learned something new!",
//     dayAgo: 6,
//   },
//   {
//     upvoteCount: 234,
//     badgeLetter: "G",
//     compagnyName: "Google",
//     message: "This is insightful.",
//     dayAgo: 7,
//   },
//   {
//     upvoteCount: 567,
//     badgeLetter: "H",
//     compagnyName: "Honda",
//     message: "I enjoyed this read.",
//     dayAgo: 8,
//   },
//   {
//     upvoteCount: 890,
//     badgeLetter: "I",
//     compagnyName: "IBM",
//     message: "Keep up the good work!",
//     dayAgo: 9,
//   },
//   {
//     upvoteCount: 1234,
//     badgeLetter: "J",
//     compagnyName: "JPMorgan",
//     message: "Very informative.",
//     dayAgo: 10,
//   },
// ];

// Define the options explicitly with the MongoClientOptions type







// const uri = "mongodb+srv://dayank:<db_password>@comment-feedback-app.6wtgg.mongodb.net/?retryWrites=true&w=majority&appName=comment-feedback-app";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


type FeedBackListProps = {
  errorMessage:string,
  isLoading:boolean,
  feedbackItems: TCommentItem[],
}


export default function FeedbackList ({feedbackItems, errorMessage,isLoading} : FeedBackListProps) {

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}
      
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};







