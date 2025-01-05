import React from "react";
import { Card, CardContent, CardTitle, CardFooter } from "./ui/card";
import Connect from "./Connect";
import { GoLinkExternal } from "react-icons/go";
import { Button } from "./ui/button";
import Link from "next/link";

const Activity = () => {
  return (
    <div className="flex flex-col  gap-5  ">
      <section>
        <Card className=" px-5 py-3 shadow-none ">
          <CardTitle className="py-3 font-bold text-[1.1rem]  ">
            My Transaction History
          </CardTitle>
          <CardContent>
            <p>Connect wallet to view transaction history </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="bg-blue-600 text-white px-5 py-3 shadow-none ">
          <CardTitle className="py-3 font-bold text-[1.1rem]  ">
            How does Ocean work?
          </CardTitle>
          <CardContent>
            <p className="text-white">
              For more information on Ocean and the products we offer, check out
              our documentation.
            </p>
          </CardContent>

          <CardFooter className="border rounded-xl py-2 px-2 justify-center flex  border-gray-200 cursor-pointer">
            Read More
          </CardFooter>
        </Card>
      </section>

      {/* <section>
        <Card className="bg-gray-300 px-5 py-3 shadow-none ">
          <CardTitle className="py-3 font-bold text-[1.1rem]  ">
            Leaderoards
          </CardTitle>
          <CardContent></CardContent>
        </Card>
      </section> */}
    </div>
  );
};

export default Activity;
