// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/libs/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    await signUp(req.body, ({ status, message }: Data) => {
      if (status) {
        res.status(200).json({ status, message });
      } else {
        res.status(400).json({ status, message });
      }
    });
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}