module.exports = ({ env }) => ({
  auth: {
    secret: process.env.JWT_SECRET || 'dein_zufällig_generiertes_geheimnis',
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
