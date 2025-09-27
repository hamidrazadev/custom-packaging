/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.halfpricepackaging.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "apiv1.boxprintinghub.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;