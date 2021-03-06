// API url
export const apiUrl = "https://zurri-booking.herokuapp.com/api";

// Auth Constants
export const authConstants = {
    //Modal constants
    close_login: "close_login_modal",
    open_login: "open_login_modal",
    close_register: "close_register_modal",
    open_register: "open_register_modal",
    //Registration constants
    registering: "loaging_register_request",
    register_user: "register_user_request",
    register_user_fail: "register_user_failure",
    register_user_success: "register_user_successfull",
    //Login constants
    logging: "loading_login_request",
    login_user: "login_user_request",
    login_user_fail: "login_user_failure",
    login_user_success: "login_user_successfull",
    logout_user: "logout_user_request"
};

export const hotelConstants = {
    hoteLoading: "action_loading",
    //fetching hotels
    fetch_hotels: "fetch_hotel_request",
    fetch_hotels_success: "fetch_hotel_request_successfull",
    fetch_hotels_fail: "fetch_hotel_request_failure",
};