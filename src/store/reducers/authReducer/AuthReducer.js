const initAuthState = {
    isAuth: false,
    email: null
};

const AuthReducer = (state = initAuthState, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return { ...state, isAuth: true, email: action.payload };
        default:
            return state;
    }
};

export default AuthReducer;