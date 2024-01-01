# gabfstr.github.io
Personal portfolio website, built upon the Gatsby theme [Portfolio Minimal Theme](https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal/'). 


## Install dependencies
- install nodejs
- install a package manager (e.g. npm or yarn)
```bash
npm install gatsby@5.0.2 -g
cd folder
npm install --legacy-peer-deps
```

## Development


To start developing, navigate to your project directory and run the following commands:

```bash
gatsby develop
```

This will start the local development server at http://localhost:8000.

## Deployment
To deploy your site, run the following command:

```
npm run deploy
```

This will build your site and deploy it to GitHub Pages.


### Note
In this project Development is done on the `main` branch, as Gatsby publishes the built site to the `deployment` branch of the project for GitHub Pages. 
It requires a branch called "deployment" being set as deployment branch for Github Pages (see [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)).
