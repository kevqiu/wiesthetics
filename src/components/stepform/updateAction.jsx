export default function updateAction(state, payload) {
    return {
      ...state,
      orderDetails: {
        ...state.orderDetails,
        ...payload
      }
    };
  }
  