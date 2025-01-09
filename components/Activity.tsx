import React from "react";
import { Card, CardContent, CardTitle, CardFooter } from "./ui/card";

const Activity = () => {
  return (
    <Card className=" px-5 py-3 shadow-none ">
      <CardTitle className="py-3 font-bold text-[1.1rem]  ">
        My Transaction History
      </CardTitle>
      <CardContent>
        <p>Connect wallet to view transaction history </p>
      </CardContent>
    </Card>
  );
};

export default Activity;
