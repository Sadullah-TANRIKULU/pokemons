/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/pokemons/' : ''
}


