import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
    // Note: This is only an example. If you use Pages Router,
    // use something else that works, such as "service-worker/index.ts".
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
    reloadOnOnline: true,
    cacheOnNavigation: true,
    additionalPrecacheEntries: [{ url: "/~offline", revision }],
});



/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSerwist(
    nextConfig
);
