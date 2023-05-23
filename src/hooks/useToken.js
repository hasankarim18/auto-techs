import { baseServerUrl } from "../utils/url";


const useToken = ( loggedUser ) => {
  fetch(`${baseServerUrl}/jwt`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(loggedUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // warning Local storage is not the best( second best )
      localStorage.setItem("auto-tech-token", data.token);
    })
    .catch((error) => {
      console.log(error);
    });
};


export default useToken