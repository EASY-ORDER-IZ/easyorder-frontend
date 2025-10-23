import img from '../../assets/images/signinpic.png';
const SignInPic = () => {
  return (
    <div className="flex w-full">
      <img src={img} className="h-full w-full object-cover" />
    </div>
  );
};

export default SignInPic;
