import { getKakaoLoginLink } from "../../api/kakaoApi";
import { Link } from "react-router-dom";

const KakaoLoginComponent = () => {
  const link = getKakaoLoginLink();

  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full">
        <div className="text-3xl text-center m-6 text-white font-extrabold w-3/4 bg-yellow-500 shadow-sm rounded p-2">
          <Link to={link}>KAKAO LOGIN</Link>
        </div>
      </div>
    </div>
  );
};

export default KakaoLoginComponent;
