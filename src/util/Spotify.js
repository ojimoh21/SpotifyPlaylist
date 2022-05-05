let userAccessToken;
const clientId = '';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
  getAccessToken(){
    if(userAccessToken){
      return userAccessToken;
    }
    //check for access token match
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&])*/);

      if(accessTokenMatch && expiresInMatch){
        userAccessToken = accessTokenMatch[1];
        const expiresIn =  Number(expiresInMatch[1]);
        // Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
        window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return userAccessToken;
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      }
  }
}

export default Spotify;
