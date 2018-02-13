# Portfolio site build with [Gatsby](https://www.gatsbyjs.org/) hosted on [GitHub Pages](https://pages.github.com/)

## Because [User Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) must be served from master branch Develop files are kept on [develop](https://github.com/zetdotcom/zetdotcom.github.io/tree/develop) branch.

## Master branch keeps static files produced by Gatsby.

**Add below code do package.json, where address after '/' is name of the repo.**

    	"homepage": "https://zetdotcom.github.io/zetdotcom.github.io",

in this case repo name is zetdotcom.github.io as this is required to desplay a website on 'https://zetdotcom.github.io/'

## Add below script to package.json:
    "deploy": "gatsby build && gh-pages -b master -d public"

##
    gatsby build 
*generate static files in 'public' directory*

##
    gh-pages -b master -d public 
*pushes static files  to master branch from public directory*
