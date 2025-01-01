import React from "react";
import { Jost } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Community, Partners } from "./Carousel";

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className={`${jost.className} py-10`}>
      <section className="flex flex-col gap-8 py-1">
        <p className={`text-3xl  text-center`}>
          Working on-chain with the best community
        </p>

        <Community />
      </section>
      <div className={`flex py-20 gap-10 justify-center items-center`}>
        <section>
          <Card className="bg-blue-200 w-[500px] py-8 text-center px-5">
            <CardHeader>
              <CardTitle className="text-xl">
                Unlock Liquidity with Ethereum
              </CardTitle>
              <CardDescription>
                Access funds without selling your Ethereum.
              </CardDescription>
            </CardHeader>
            <p>
              Utilize your Ethereum as collateral to unlock capital for other
              investments or needs while retaining your crypto exposure.
            </p>
            <CardContent className="flex justify-center text-center">
              <Image
                src={"/images/bond-token.svg"}
                alt="Unlock Liquidity"
                height="700"
                width="700"
                className="h-[200px] w-[200px]"
              />
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 w-full py-5 hover:bg-blue-700">
                Explore Options
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <Card className="bg-orange-200 w-[500px] py-8 text-center px-5">
            <CardHeader>
              <CardTitle className="text-xl">
                Earn Passive Income with Ethereum
              </CardTitle>
              <CardDescription>
                Put your Ethereum to work and generate rewards.
              </CardDescription>
            </CardHeader>
            <p>
              Provide liquidity or stake your Ethereum to earn attractive
              returns while supporting the decentralized finance ecosystem.
            </p>
            <CardContent className="flex justify-center text-center">
              <Image
                src={"/images/levered-token.svg"}
                alt="Earn Passive Income"
                height="700"
                width="700"
                className="h-[200px] w-[200px] flex justify-center"
              />
            </CardContent>
            <CardFooter>
              <Button className="bg-orange-600 w-full py-5 hover:bg-orange-700">
                Start Earning
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>

      <section className="flex flex-col gap-8 py-1">
        <p className={`text-3xl  text-center`}>Backed by trusted partners</p>
        <Partners />
      </section>
    </div>
  );
};

export default About;
