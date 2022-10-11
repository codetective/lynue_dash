import jwt_decode from "jwt-decode";
import { login, logout } from "../redux/features/AuthSlice";
const HANDLEJWT = (token, dispatch) => {
  try {
    let TODAY = Date.now();
    const decoded = jwt_decode(token);
    let JWT_DATE = new Date(decoded.exp * 1000);
    if (JWT_DATE < TODAY) {
      return dispatch(logout());
    }
    const { user: p } = decoded;
    const user = {
      name: p.userFirstname + p.userLastname,
      id: p.userID,
      email: p.useremail,
      phone: p.userphone,
      address: p.useraddress,
      image: p.userpicture,
      role: p.userrole,
    };
    dispatch(login(user));
  } catch (err) {
    return dispatch(logout());
  }
};

export { HANDLEJWT };
