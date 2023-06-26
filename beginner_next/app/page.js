import React from "react";
import Link from "next/link";
export default function App() {
  return (
    <div>
      <Link
        href={{
          pathname: "/hakkimizda",
          query: {
            name: "Kamil",
            surname: "Karaisli",
          },
        }}
      >
        Hakkımızda
      </Link>

      <Link href="/docs/post5"> Post 5</Link>
    </div>
  );
}
