import React from "react";
import axios from "axios";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  function sendSignup() {
    var data = JSON.stringify({
      email: email,
      password: password,
      username: username,
      city: city,
      phoneNumber: phoneNumber,
    });
    axios
      .post("http://localhost:3000/user/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/login?error=true";
      });
  }

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-gray-200">
              Create an account
            </h2>
            <p className="mt-2 text-center text-sm dark:text-gray-200">
              Or{" "}
              <Link href="/login">
                <a className="font-medium text-green-600 hover:text-green-400">
                  log in
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={sendSignup}>
            <input type="hidden" name="remember" defaultValue="false" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="city" className="sr-only">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="phone-number"
                  autoComplete="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-gray-100 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={
                  "relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-60" +
                  (email !== "" && password !== "" ? "" : "cursor-not-allowed")
                }
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
