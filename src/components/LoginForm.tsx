import { useState } from "react";
import axios from "axios";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function sendLogin() {
    console.log("Sending login request");
    var data = JSON.stringify({
      password: password,
      mail: email,
    });

    var config = {
      method: "post",
      url: "http://82.64.198.124:8081/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(data);
    axios(config)
      .then(function (response: { data: any }) {
        // store the token in browser storage
        localStorage.setItem("token", response.data.token);
        // redirect to the dashboard
        window.location.href = "/";
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  return (
    <div className="w-96">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-gray-200 text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm dark:text-gray-200 text-gray-900">
          Or{" "}
          <Link href="/signup">
            <a className="font-medium text-green-600 hover:text-green-400">
              create an account
            </a>
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={sendLogin}>
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-300 focus:ring-opacity-70 border-gray-300 rounded cursor-not-allowed"
              disabled
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm dark:text-gray-200 text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link href="resetPassword">
              <a className="font-medium text-green-600 hover:text-green-400">
                Forgot your password?
              </a>
            </Link>
          </div>
        </div>
      </form>
      <div>
        <button
          onClick={() => sendLogin()}
          className={
            "relative w-full mt-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-60" +
            (email !== "" && password !== "" ? "" : "cursor-not-allowed")
          }
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-green-600 group-hover:text-green-200"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </div>
  );
}
