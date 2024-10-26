const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "gr"],
    defaultLocale: "en-US",
  },
};

module.exports = withNextIntl(nextConfig);
