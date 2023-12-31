module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      useDefaults: true,
      contentSecurityPolicy: {
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "strapi-app-aws-s3.s3.eu-north-1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "strapi-app-aws-s3.s3.eu-north-1.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
