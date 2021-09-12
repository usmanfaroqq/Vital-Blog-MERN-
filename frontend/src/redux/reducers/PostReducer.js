import { POST_ERRORS, SET_LOADER, CLOSE_LOADER,REDIRECT_TRUE, REDIRECT_FALSE } from "../types/PostTypes";
const initState = {
  loading: false,
  createErrors: [],
  redirect: false, 
  message: '',
};

const PostReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (type === POST_ERRORS) {
    return { ...state, createErrors: payload };
  }else if (type ===REDIRECT_TRUE ){
    return { ...state, redirect: true };
  }
   else {
    return state;
  }
};

export default PostReducer;
