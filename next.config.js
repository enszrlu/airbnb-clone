/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['links.papareact.com']
    },
    env: {
        mapbox_key:
            'pk.eyJ1IjoiZW5zenJsdSIsImEiOiJjbGZrYnFmYzMwOWQ3NDVwY3E2NDF4bnF3In0.JU1p1mYeJcpEw7X8VJrqUQ'
    },
    reactStrictMode: true
};

module.exports = nextConfig;
