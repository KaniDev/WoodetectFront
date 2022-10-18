import LoginForm from "../components/LoginForm";
import Nav from "../components/Navbar";
import Head from "next/head";

export default function Login() {
  return (
    <div className="items-center w-full">
      <Head>
        <title>Login - Woodetect</title>
      </Head>
      <Nav />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mt-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
