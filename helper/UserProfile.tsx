const UserProfile = (() => {
  let userUUID: String;
  let username: String;

  let getUserUUID = function () {
    return userUUID;
  };

  let setUserUUID = function (uuid: String) {
    userUUID = uuid;
  };

  let getUsername = function () {
    return username;
  };

  let setUsername = function (name: String) {
    username = name;
  };

  return {
    getUserUUID: getUserUUID,
    setUserUUID: setUserUUID,
    getUsername: getUsername,
    setUsername: setUsername
  }

})();

export default UserProfile;