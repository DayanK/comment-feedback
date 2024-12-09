
export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="Enter your feedback"
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the compagny
      </label>

      <div>
        <p className="u-italic">150</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
