const React = require('react');

// Inject StatCounter tracking code into the page body when configured.
// Configure by adding a `statcounter` object to the theme options in `gatsby-config.js`, for example:
//
// plugins: [{
//   resolve: require.resolve('./plugins/gatsby-theme-portfolio-minimal'),
//   options: {
//     ...,
//     statcounter: {
//       project: 12345678,
//       security: 'abcdef12',
//       invisible: 1, // 1 or 0
//       environments: ['production'] // which NODE_ENV values to enable on
//     }
//   }
// }]

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const stat = (pluginOptions && pluginOptions.statcounter) || {};
  const { project, security, invisible = 1, environments = ['production'] } = stat;
  const env = process.env.NODE_ENV || 'development';

  // If not configured or not in allowed environment, don't inject anything
  if (!project || !security) return;
  if (!environments.includes(env)) return;

  const inline = `var sc_project=${project};\nvar sc_invisible=${invisible};\nvar sc_security=\"${security}\";\n(function(){var s=document.createElement(\"script\");s.type=\"text/javascript\";s.async=true;s.src=\"https://www.statcounter.com/counter/counter.js\";var x=document.getElementsByTagName(\"script\")[0];x.parentNode.insertBefore(s,x);})();`;

  setPostBodyComponents([
    React.createElement('script', {
      key: 'statcounter-inline',
      dangerouslySetInnerHTML: { __html: inline },
    }),
    React.createElement('noscript', {
      key: 'statcounter-noscript',
      dangerouslySetInnerHTML: {
        __html: `<div class="statcounter"><a title="Web Analytics Made Easy - Statcounter" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="https://c.statcounter.com/${project}/0/${security}/1/" alt="Web Analytics Made Easy - Statcounter" referrerPolicy="no-referrer-when-downgrade"></a></div>`,
      },
    }),
  ]);
};