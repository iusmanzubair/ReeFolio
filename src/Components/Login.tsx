import { toast } from "sonner"
import { supabase } from "../utils/supabaseClient"

export const Login = () => {
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

  return <button onClick={signInWithGoogle}>Sign in with google</button>
}