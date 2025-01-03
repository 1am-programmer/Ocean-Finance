import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Connect from "./Connect";
import { GoLinkExternal } from "react-icons/go";
import { Button } from "./ui/button";
import Link from "next/link";
import TestToken from "./TestToken";
import Image from "next/image";

// Add Images  Image
const Tasks = () => {
  return (
    <div>
      <Card className="shadow-none">
        <CardTitle className="mb- p-5 text-2xl ">Things to do</CardTitle>

        <CardContent className="flex flex-col gap-5   ">
          <section className="bg-gray-300   shadow-none py-5 px-5 rounded-xl">
            <div className="mb-5">
              <h1 className="text-xl font-bold">Connect your wallet</h1>
              <p>Get started exploring on Arbitrum Testnet.</p>
            </div>

            <Connect />
          </section>

          <section className="bg-gray-300   shadow-none py-5 px-5 rounded-xl">
            <div className="mb-5">
              <h1 className="text-xl font-bold">Get test tokens</h1>
              <p>
                Click the button below to get some Arb Sepolia ETH, to begin
                testing the app.
              </p>
            </div>

            <TestToken />
          </section>

          <section className="bg-gray-300   shadow-none py-5 px-5 rounded-xl">
            <div className="mb-5">
              <h1 className="text-xl font-bold">Join our discord community</h1>
              <p>Connect on Discord group, to get updated information.</p>
            </div>

            <Button className="bg-transparent  text-black border-none  shadow-none  hover:bg-transparent flex items-center gap-2">
              <GoLinkExternal />
              <Link href={"http://discordapp.com/users/1151028385108213760"}>
                Connect
              </Link>
            </Button>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tasks;
