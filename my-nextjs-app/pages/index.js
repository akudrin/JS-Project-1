import React from "react";
import Link from "next/link";
function MyComponent() {
  return (
    <div>
      <p>Hello from Next.js!</p>
      <Link href="/About">
        <a>About</a>
      </Link>
    </div>
  );
}
export default MyComponent;
