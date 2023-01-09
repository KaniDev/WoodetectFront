import { Navbar } from "flowbite-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <ThemeToggle />
          <Link href="/">
            <a className="self-center whitespace-nowrap ml-5 text-3xl font-semibold dark:text-white text-green-700">
              Woodetect
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/sensors">Sensors</Navbar.Link>
          <Navbar.Link href="/login">Login</Navbar.Link>
          <Navbar.Link href="/signup">Sign Up</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
