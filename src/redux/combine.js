import { combineReducers } from "redux";

import superadmin from "./slice/superadmin";
import admin from "./slice/admin";
import user from "./slice/clientAuth";
import waitlist  from "./slice/waitlist";
import analyst  from "./slice/analyst";
import support  from "./slice/support";
import moderator  from "./slice/moderator";
import rent from "./slice/rent";

//for renting property
import  Rent_commercial  from "./post_slice/commercial";
import  Rent_residental  from "./post_slice/residential";
import  Rent_land  from "./post_slice/land";
import  Rent_industrial  from "./post_slice/industrial";
import  Rent_shortlet  from "./post_slice/shortlet";

//for selling property
import  Sell_commercial  from "./sell_slice/commercial";
import  Sell_residental  from "./sell_slice/residential";
import  Sell_land  from "./sell_slice/land";
import  Sell_industrial  from "./sell_slice/industrial";
import  Sell_shortlet  from "./sell_slice/shortlet";


const root = combineReducers({
    superadmin:superadmin,
    user:user,
    waitlist:waitlist,
    admin:admin,
    analyst:analyst,
    support:support,
    moderator:moderator,
    rent: rent,
    Rent_commercial,
    Rent_industrial,
    Rent_residental,
    Rent_shortlet,
    Rent_land,
    Sell_commercial,
    Sell_industrial,
    Sell_residental,
    Sell_shortlet,
    Sell_land
   
})

export default root