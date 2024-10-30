const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "gr"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = withNextIntl(nextConfig);
