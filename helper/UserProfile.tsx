var UserProfile = (() => {
    var userUUID :String;
  
    var getUserUUID = function() {
      return userUUID;    // Or pull this from cookie/localStorage
    };
  
    var setUserUUID = function(uuid: String) {
      userUUID = uuid;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getUserUUID: getUserUUID,
      setUserUUID: setUserUUID
    }
  
  })();
  
  export default UserProfile;