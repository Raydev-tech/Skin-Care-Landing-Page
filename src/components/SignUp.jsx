import { useState, useEffect } from "react";
import { UserPlus, Mail, Lock, Eye, EyeOff, Facebook } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    alert(`Creating account for: ${fullName} (${email})`);
  }

  function handleSocialSignup(provider) {
    alert(`Signing up with ${provider} (mock)`);
  }

  return (
    <div
      data-aos="flip-left"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-50 px-4"
    >
      <div
        data-aos="flip-left"
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">
          Create your PureSkin account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <p className="text-center text-sm text-red-500" data-aos="flip-left">
              {error}
            </p>
          )}

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="Jane Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <UserPlus className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="block w-full rounded-md border border-gray-300 pl-10 pr-10 py-2 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock className="h-5 w-5" />
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-pink-600 py-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 flex flex-col items-center gap-3">
          <button
            onClick={() => handleSocialSignup("Facebook")}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-pink-50"
          >
            <Facebook className="h-5 w-5 text-blue-600" />
            Sign up with Facebook
          </button>
    
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-pink-600 hover:text-pink-800">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
export default SignUp;