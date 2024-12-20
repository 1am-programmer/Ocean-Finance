import React from "react";
import Link from "next/link";
import Connect from "./Connect";

const Header = () => {
  return (
    <div>
      {" "}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1 className="text-4xl font-bold">Ocean Finance</h1>

          <section className="flex items-center">
            <Link
              href={"/portfolio"}
              className="hover:bg-gray-100 rounded-xl px-2 py-1"
            >
              Portfolio
            </Link>
            <Link
              href={"/borrow"}
              className="hover:bg-gray-100 rounded-xl px-2 py-1"
            >
              Borrow
            </Link>
            <Link
              href={"/lend"}
              className="hover:bg-gray-100 rounded-xl px-2 py-1"
            >
              Lend
            </Link>
            <Link
              href={"/earn"}
              className="hover:bg-gray-100 rounded-xl px-2 py-1"
            >
              Earn
            </Link>
          </section>
        </div>

        <Connect />
      </section>
    </div>
  );
};

export default Header;
