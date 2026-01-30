import { toast } from "sonner"
import { supabase } from "../utils/supabaseClient"
import googleLogo from "../../public/Google.svg"

export const Signup = () => {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${import.meta.env.VITE_LIVE_URL}/my-portfolios`
      }
    })

    if(error) {
      toast.error("Error logging in");
    }
  }

  return (
    <div className="h-[60rem] flex items-center justify-center">
      <div  className="bg-cardGray w-[32rem] p-6 rounded-xl border-[1px] border-neutral-700/50 space-y-5">
        <h3 className="text-2xl font-bold">SignUp with Google</h3>
        <button onClick={signInWithGoogle} className="flex gap-2 items-center justify-center w-full bg-bgSecondary py-2.5 px-4 rounded-lg cursor-pointer"><img src={googleLogo} alt="google-log" className="w-5 h-5"/>Sign up with google</button>
      </div>
    </div>
  ); 
}
