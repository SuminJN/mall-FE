import { atom } from "recoil";
import { getCookies } from "../util/cookieUtil";

const initState = {
  email: "",
  nickname: "",
  social: false,
  accessToken: "",
  refreshToken: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookies("member");

  // 닉네임 처리
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }

  return memberInfo;
};

const signinState = atom({
  key: "signinState",
  default: loadMemberCookie() || initState,
});

export default signinState;
