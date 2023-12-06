module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'links.papareact.com'
      },
      {
        hostname: 'fakestoreapi.com',
      },
      {
        hostname: 'images-na.ssl-images-amazon.com',
      },
      {
        hostname: 'm.media-amazon.com'
      },
    ]
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    firebase_api_key: process.env.FIREBASE_API_KEY,
    firebase_auth_domain: process.env.FIREBASE_AUTH_DOMAIN,
    firebase_project_id: process.env.FIREBASE_PROJECT_ID,
    firebase_storage_bucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebase_messaging_sender_id: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebase_app_id: process.env.FIREBASE_APP_ID,
    permissions_key_id: process.env.PERMISSIONS_KEY_ID,
    permissions_key: process.env.PERMISSIONS_KEY,
  }
};
