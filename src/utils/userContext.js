import { createContext } from "react";

const userContext = createContext({
   user: {
    name: "Abhay kumar",
    email: "abhaykumar1752005@gmail.com",
}
});

userContext.displayName = "userContext"; // ye name react developer tools me show hoga in components

export default userContext;