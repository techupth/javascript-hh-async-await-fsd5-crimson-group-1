// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

async function onFailure(data) {
  let message = {
    errorCode: 500,
    message: "👿 Failed to request data from server",
  };
  return message;
}

let asyncFunction = async () => {
  try {
    let johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (error) {
    let errorMessage = await onFailure();
    console.log(errorMessage);
  }
};

asyncFunction();
