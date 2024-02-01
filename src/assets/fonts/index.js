import localFont from "next/font/local";

const shabnamFont = localFont({
  src: [
    {
      path: "./shabnam/shabnam-light.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./shabnam/shabnam.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./shabnam/shabnam-bold.woff",
      weight: "bold",
      style: "normal",
    },
  ],
});

export {
  shabnamFont,
};