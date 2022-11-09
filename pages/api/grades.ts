// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  grade: string;
};

export const term1 = [
  { name: "Physics 1", grade: "-" },
  { name: "System Design", grade: "2.5" },
  { name: "Integrals", grade: "9" },
  { name: "Game Theory", grade: "5.4" },
  { name: "C++", grade: "8" },
];

export const term2 = [
  { name: "Physics 2", grade: "2.1" },
  { name: "Circuits 1", grade: "4.2" },
  { name: "Electromagnetic Fields 1", grade: "5.2" },
  { name: "Differential Equations", grade: "9.4" },
  { name: "Java", grade: "8" },
];

export const term3 = [
  { name: "Circuits 2", grade: "0.1" },
  { name: "Telecommunations 1", grade: "1.2" },
  { name: "Electromagnetic Fields 2", grade: "10" },
  { name: "Linux", grade: "9.8" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
