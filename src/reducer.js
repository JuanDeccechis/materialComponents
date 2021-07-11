import { types } from "./actions";

const initialState = {
  user: "",
  loading: false,
  error: '',
  notificationsEnabled: true,
  notificationData:
    [{
      "text": "user1",
      "index": 0,
      "destiny": "/home"
    }, {
      "text": "user2",
      "index": 1,
      "destiny": "/FAQ"
    }, {
      "text": "Pepe te envió una solicitud",
      "index": 2,
      "destiny": "/home"
    }, {
      "text": "María compartió una foto",
      "index": 3,
      "destiny": "/home"
    }, {
      "text": "A Gerónimo le gustó tu comentario",
      "index": 4,
      "destiny": "/home"
  }]
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOGIN: {
      return {
        ...state,
        user: action.payload
      }
    }
    default: 
      return state;
  }
};

export default reducer;
