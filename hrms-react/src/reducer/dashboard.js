import Constant from '../constant';
const initialState = {
  dashboardData:null,
  clickCount: 0
}

export default (state=initialState,action) => {
  switch (action.type) {
    case Constant.ITEM_CLICKED: {
      const currentItemClick = state.clickCount;
      return Object.assign({}, state, {clickCount: currentItemClick + 1});
    }
  }
  return state;
}