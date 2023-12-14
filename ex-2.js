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

function onFailure(data) {
  let message = {
    errorCode: 500,
    message: "👿 Failed to request data from server",
  };
  console.log(message);
}

getJohnProfile().catch(onFailure);
