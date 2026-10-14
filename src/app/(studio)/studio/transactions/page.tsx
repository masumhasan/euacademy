import type { Metadata } from "next";
import { StudentsView } from "@/components/studio/students/StudentsView";

export const metadata: Metadata = { title: "Transactions & Payoneer" };

export default function TransactionsPage() {
  return <StudentsView initialTab="payoneer" />;
}
