import img from '../images/signinpic.png';
const SignInPic = () => {
  return (
    <div className="flex w-full">
      <img src={img} className="object-fit h-full w-full" />
    </div>
  );
};

export default SignInPic;
