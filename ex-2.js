//Exercise #2
let getJohnProfile = () => {
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

function displayReceivedData(data) {
  console.log(data);
}

function displayError(error) {
  console.log(error);
}

getJohnProfile().then(displayReceivedData).catch(displayError);
