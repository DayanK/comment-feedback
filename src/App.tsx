import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import { TCommentItem } from "./components/lib/type";

function App() {

  
  const [feedbackItems, setFeedbackItems] = useState<TCommentItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");


  const handleAddFeedbackToList = (message:string) => {

    // Find the company name in the message using a regex that looks for hashtags
     const companyNameMatch = message.match(/#(\w+)/); 
     const companyName = companyNameMatch ? companyNameMatch[1] : '';

    const newItem: TCommentItem = {
      id: new Date().getTime(),
      message: message,
      upvoteCount:0,
      dayAgo: 0,
      companyName: companyName,
      badgeLetter: companyName.substring(0,1).toUpperCase()
    }

    // Update the feedback items state
    setFeedbackItems([...feedbackItems, newItem])

  }
  

  const fetchFeedbackItems = async () => {

    const response = await fetch("http://localhost:3000/feedbacks");

    try {
      setIsLoading(true);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      setFeedbackItems(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error)
      //network error
      setErrorMessage(
        "Something went wrong while fetching the feedbacks. Please try again later."
      );
      setIsLoading(false);
    }
  };


  useEffect(() => {    
    fetchFeedbackItems();
  
  }, []);

  return (
    <div className="app">
      <Footer />
      
      <Container 
        feedbackItems={feedbackItems} 
        isLoading={isLoading} 
        errorMessage={errorMessage}
        onAddFeedbackToList={handleAddFeedbackToList}/>
      <HashtagList />
    </div>
  )
}

export default App
