import axios from "axios";

const rest_api_key = process.env.REACT_APP_REST_API_KEY_KAKAO;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI_KAKAO;

const auth_code_path = "https://kauth.kakao.com/oauth/authorize";

const access_token_url = "https://kauth.kakao.com/oauth/token";

export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  return kakaoURL;
};

export const getKakaoAccessToken = async (authCode) => {
  const header = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const params = {
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code: authCode,
  };

  const res = await axios.post(access_token_url, params, header);

  const accessToken = res.data.access_token;

  return accessToken;
};

export const getMemberWithKakaoAccessToken = async (accessToken) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`
  );

  return res.data;
};
