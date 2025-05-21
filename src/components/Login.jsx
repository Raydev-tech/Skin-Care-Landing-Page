import { useState, useEffect } from "react";
import { User, Lock, Eye, EyeOff, Facebook } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    alert(`Signing in with email: ${email}, remember me: ${remember}`);
  }

  function handleSocialLogin(provider) {
    alert(`Signing in with ${provider} (mock)`);
  }

  return (
    <div
      data-aos="flip-left"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-50 px-4"
    >
      <div
        data-aos="zoom-in"
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">
          Sign in to PureSkin
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <p className="text-center text-sm text-red-500" data-aos="fade-down">
              {error}
            </p>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
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
                <User className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span className="ml-2">Remember me</span>
            </label>

            <a
              href="#"
              className="text-sm font-medium text-pink-600 hover:text-pink-800"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-pink-600 py-2 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center justify-center gap-4">
          <button
            onClick={() => handleSocialLogin("Facebook")}
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-pink-50"
          >
            <Facebook className="h-5 w-5 text-blue-600" />
            Facebook
          </button>
          
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium text-pink-600 hover:text-pink-800">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;