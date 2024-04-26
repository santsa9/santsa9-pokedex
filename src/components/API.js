import axios from "axios";

export const getElements = async (url) => {
    const user = JSON.parse(localStorage.getItem('user'));
    let message;
    let result;
    let config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + user?.token,
        
        },
    };
    await axios
        .get(url, config)
        .then((response) => {
            if (response.status === 200) {
                result = response.data;
                message = "Obtingut amb èxit";
            }
            if (
                response.data.status === "failed" &&
                response.data.success === undefined
            ) {
                message = "No s'han trobat";
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return { result, message };
};