import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div>
      <div className="divider">Or</div>
      <button
        className="btn btn-outline btn-accent w-full text-white"
        onClick={() => signInWithGoogle()}
      >
        Continue With google
      </button>
    </div>
  );
};

export default SocialLogin;
