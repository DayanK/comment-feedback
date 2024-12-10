import React, { useState } from "react";
import { MAX_CHARACTERES } from "../../lib/constants";


type FeedbackFormProps = {
  onAddFeedbackToList: (message: string) => void
}

export default function FeedbackForm({onAddFeedbackToList}: FeedbackFormProps) {
  const [text, setText] = useState<string>("");
  const chartCount = MAX_CHARACTERES - text.length;


  const handleChangeTextArea = ( event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
      if(newText.length > MAX_CHARACTERES){
        return
      }
    setText(event.target.value);
  }; 


  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddFeedbackToList(text);
    setText('');
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <textarea
        value={text}
        onChange={handleChangeTextArea}
        id="feedback-textarea"
        placeholder="Enter your feedback"
        spellCheck={false}
        maxLength={MAX_CHARACTERES }
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the compagny
      </label>

      <div>
        <p className="u-italic">{chartCount}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
