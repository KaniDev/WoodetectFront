import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ResetForm() {
  const [email, setEmail] = useState("");

  function sendResetEmail() {
    var data = JSON.stringify({
      mail: email,
    });
    console.log(data);

    var config = {
      method: "post",
      url: "http://82.64.198.124:8081/users/recoverpassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Email sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="w-96">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold dark:text-gray-200 text-gray-900">
          Forgot your password ?
        </h2>
        <p className="mt-2 text-center text-sm dark:text-gray-200 text-gray-900">
          Or{" "}
          <Link href="/login">
            <a className="font-medium text-green-600 hover:text-green-400">
              go back to login
            </a>
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={() => sendResetEmail()}>
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
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
        </div>
      </form>
      <div>
        <button
          onClick={() => sendResetEmail()}
          className={
            "relative w-full flex justify-center py-2 px-4 mt-8 border border-transparent text-sm font-medium rounded-md text-black bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-60" +
            (email !== "" ? "" : "cursor-not-allowed")
          }
        >
          Get reset email
        </button>
      </div>
    </div>
  );
}
