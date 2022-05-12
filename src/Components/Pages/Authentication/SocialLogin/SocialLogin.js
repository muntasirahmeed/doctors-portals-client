import React from "react";
import {
  signInWithGoogle,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="divider">Or</div>
      <button
        class="btn btn-outline btn-accent w-full text-white"
        onClick={() => signInWithGoogle()}
      >
        Continue With google
      </button>
    </div>
  );
};

export default SocialLogin;
