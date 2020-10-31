import * as React from "react";
import { feedbackStore, createFeedback } from "../store/feedback";

export default () => {
  const [feedback] = feedbackStore.usePureStore();

  const handleClick = () => {
    createFeedback({
      type: "success",
      message: "Testing Testing 123"
    })
  }
  return (
    <div>
      <button onClick={handleClick} type="button">test</button>
      <div>
        { feedback.map((msg, index:number) => <div key={index}>{msg.message}</div>) }
      </div>
    </div>
  )
}
