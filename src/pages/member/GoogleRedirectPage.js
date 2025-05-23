import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import { getMemberWithGoogleAccessToken } from "../../api/googleApi";

const GoogleRedirectPage = () => {
  const [searchParams] = useSearchParams();

  const { moveToPath, saveAsCookie } = useCustomLogin();

  const authCode = searchParams.get("code");

  useEffect(() => {
    getMemberWithGoogleAccessToken(authCode).then((memberInfo) => {
      console.log("-------------------");
      console.log(memberInfo);

      saveAsCookie(memberInfo);
      // 소셜 회원이 아니라면
      if (memberInfo && !memberInfo.social) {
        moveToPath("/");
      } else {
        moveToPath("/member/modify");
      }
    });

    // getKakaoAccessToken(authCode).then((accessToken) => {
    //   console.log(accessToken);
    //
    //   getMemberWithKakaoAccessToken(accessToken).then((memberInfo) => {
    //     console.log("-------------------");
    //     console.log(memberInfo);
    //
    //     saveAsCookie(memberInfo);
    //     // 소셜 회원이 아니라면
    //     if (memberInfo && !memberInfo.social) {
    //       moveToPath("/");
    //     } else {
    //       moveToPath("/member/modify");
    //     }
    //   });
    // });
  }, [authCode]);

  return (
    <div>
      <div>Google Login Redirect</div>
      <div>{authCode}</div>
    </div>
  );
};

export default GoogleRedirectPage;
