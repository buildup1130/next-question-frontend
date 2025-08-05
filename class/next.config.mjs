/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // rewrites 추가
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.LOCALAPI_URL}/:path*`, // ngrok URL로 변경하세요
  //     },
  //   ];
  // },
};

export default nextConfig;
