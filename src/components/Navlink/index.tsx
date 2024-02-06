import React from "react";
import { useRouter } from "next/router";
import { title } from "process";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

const Navlink = (props: Props) => {
  const { href, title } = props;
  const router = useRouter();

  return (
    // <Link href={props.href}>
    <Link
      href={props.href}
      className={`flex my-0 justify-center text-center text-[#fff] text-xl font-semibold mt-8 ${
        router.pathname == props.href ? "text-amber-300" : ""
      }`}
    >
      {props.title}
    </Link>
    // </Link>
  );
};

export default Navlink;
