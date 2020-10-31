import createStore from 'pure-store/react';

export const feedbackStore = createStore([])

export const createFeedback = (options: {
  type: "success" | "danger" | "warning" | "info"
  message: string
}) => {
    feedbackStore.update((s) => {
        s.push(options);
    })
}
