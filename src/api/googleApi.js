import axios from "axios";

const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI_GOOGLE;

export const getGoogleLoginLink = () => {
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${google_client_id}&redirect_uri=${redirect_uri}&scope=openid%20email%20profile`;

  return googleURL;
};

export const getMemberWithGoogleAccessToken = async (code) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_SERVER_HOST}/api/member/google?code=${code}`
  );

  return res.data;
};
