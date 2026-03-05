const path = require('path');
const spreeAdminPath = process.env.SPREE_ADMIN_PATH;

module.exports = {
  content: [
    path.join(spreeAdminPath, 'app/views/**/*.erb'),
    path.join(spreeAdminPath, 'app/helpers/**/*.rb'),
    path.join(spreeAdminPath, 'app/components/**/*.rb'),
    path.join(spreeAdminPath, 'app/javascript/**/*.js'),
    './app/views/**/*.erb',
    './app/helpers/**/*.rb',
    './app/components/**/*.rb',
    './app/javascript/**/*.js',
  ],
}