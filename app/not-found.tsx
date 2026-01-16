import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500">존재하지 않는 페이지입니다.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        홈페이지로 돌아가기
      </Link>
    </div>
  );
}
