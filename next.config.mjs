/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.halfpricepackaging.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;