import actionType from "../constant/constant";
export function changeState(updatedUserName) {
  return dispatch => {
   dispatch({type:actionType.CHANGENAME,payload:updatedUserName})
   };
}
