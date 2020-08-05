import React from "react";
import Link from "next/link";
import GetLink from "../SharedComponents/DynamicRouter";
function MyComponent() {
  return (
    <div>
      <p>Hello from Next.js!</p>
      <Link href="/About">
        <a>About</a>
      </Link>
      <GetLink title="Page 1" Disp="page-1" Class="img p1"></GetLink>
      <GetLink title="Page 2" Disp="page-2" Class="img p2"></GetLink>
      <GetLink title="Page 3" Disp="page-3" Class="img p3"></GetLink>
      <style jsx global>
        {`
          a {
            color: blue;
          }
          .img {
            height: 50px;
            width: 50px;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            border: 1px solid black;
            border-radius: 10px;
            display: inline-block;
            margin-top: 10px;
          }
          .p1 {
            background: url(../static/Images/img1.jpg);
          }
          .p2 {
            background: url(../static/Images/img2.jpg);
          }
          .p3 {
            background: url(../static/Images/img3.jpg);
          }
        `}
      </style>
    </div>
  );
}
export default MyComponent;
