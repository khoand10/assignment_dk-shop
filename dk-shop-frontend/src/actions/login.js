import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../action_type/action_type";

export const login = (username, password) => {
  return (dispatch) => {
    if (username === "demo" && password === "demo") {
      const user = {
        username: username,
        fullname: "demo 123",
        id: "qwertyuio",
      };
      dispatch({
        type: USER_LOGGED_IN,
        payload: user,
      });
      localStorage.setItem("app-userid", user.id);
      return true;
    }
    return false;
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    if (userId === "qwertyuio") {
      const user = {
        username: "demo",
        fullname: "demo 123",
        id: "qwertyuio",
      };
      dispatch({
        type: USER_LOGGED_IN,
        payload: user,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGGED_IN,
      payload: null,
    });
  };
};

// export const login = (username, password) => (dispatch) => {
//   console.log("login ", username, password);
//   if (username === "demo" && password === "demo") {
//     console.log("vao day");
//     dispatch({
//       USER_LOGGED_IN,
//       username,
//     });
//     localStorage.setItem("app-userid", username);
//     return true;
//   }
//   return false;
// };

// export const login = (username, password) => async (dispatch, getState) => {
//   console.log("login ", username, password);
//   const store = getState();
//   console.log("store ", store);
//   if (username === "demo" && password === "demo") {
//     return {
//       type: USER_LOGGED_IN,
//       data: username,
//     };
//     return true;
//   }
//   return false;
// };

// export const login = (username, password) => {
//   if (username === "demo" && password === "demo") {
//     return {
//       type: USER_LOGGED_IN,
//       payload: username,
//     };
//   }
//   return {
//     type: USER_LOGGED_IN,
//     payload: "",
//   };
// };

// export const login = (username, password) => {
//   console.log("login ", username, password);
//   return (dispatch) => {
//     dispatch({
//       type: USER_LOGGED_IN,
//       username,
//     });
//   };
// };
