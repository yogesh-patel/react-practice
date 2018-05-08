import Constant from '../constant';
const initialState = {
  userId:null,
  user:null,
  loading:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constant.REQUEST_SENT:
      return Object.assign({},state,{loading:true});

    case Constant.REQUEST_COMPLETED:
      return Object.assign({},state,{loading:false});

    case Constant.LOGGED_IN_SUCCESS:
      return Object.assign({},state,{
        userId:action.payload.userId,
        user:action.payload.userObject
      });
  }
  return null;
};
