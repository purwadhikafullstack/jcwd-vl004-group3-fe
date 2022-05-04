const init_state = {
  email: "",
  id: 0,
  errMsg: "",
  storageIsChecked: false,
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return { ...state, ...action.payload, storageIsChecked: true };
    case "ADMIN_ERROR":
      return { ...state, errMsg: action.payload };
    case "ADMIN_LOGOUT":
      return { ...init_state, storageIsChecked: true };
    case "CHECK_STORAGE":
      return { ...state, storageIsChecked: true };
    default:
      return state;
  }
};

export default reducer;
