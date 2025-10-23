import img from '../../assets/images/signinpic.png';
const SignInPic = () => {
  return (
    <div className="relative hidden w-full lg:flex">
      <img src={img} className="relative h-full w-full object-cover" />
    </div>
  );
};

export default SignInPic;
