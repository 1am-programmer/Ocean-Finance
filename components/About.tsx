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

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className="py-10">
      <p className={`${jost.className} text-3xl  text-center`}>
        Working on-chain with the best community
      </p>

      <div
        className={`${jost.className} flex py-20 gap-10 justify-center items-center    `}
      >
        <section>
          <Card className="bg-blue-200 w-[500px] py-8 text-center  px-5 ">
            <CardHeader>
              <CardTitle className="text-xl">Borrowing on Eth</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <Image
                src={"/images/bond-token.svg"}
                alt="bond"
                height="700"
                width="700"
                className="h-[200px] w-[200px]  flex  justify-center"
              />
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 w-full py-5">Discover</Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <Card className="bg-orange-200 w-[500px] py-8 text-center  px-5 ">
            <CardHeader>
              <CardTitle className="text-xl">Lending on Eth </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <Image
                src={"/images/levered-token.svg"}
                alt="bond"
                height="700"
                width="700"
                className="h-[200px] w-[200px] flex justify-center "
              />
            </CardContent>
            <CardFooter>
              <Button className="bg-orange-600  w-full  py-5">Discover</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
