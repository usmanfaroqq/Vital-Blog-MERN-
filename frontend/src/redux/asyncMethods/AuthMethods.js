import axios from "axios";

export const postRegister =  (state) => {
     return async(dispatch) => {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          dispatch({ type: "SET_LOADER" });
          try {
            const response = await axios.post("/register", state, config); // posting register data to server
            console.log(response);
            dispatch({ type: "CLOSE_LOADER" });
          } catch (error) {
            dispatch({ type: "CLOSE_LOADER" });
            dispatch({ type: "REGISTER_ERRORS", payload: error.response.data.errors }); //errors
            console.log(error.response);
          }
     }

};
