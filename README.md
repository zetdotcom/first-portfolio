# Portfolio site build on Gatsby

## Develop files are kept on [develop](https://github.com/zetdotcom/zetdotcom.github.io/tree/develop) branch.

## Master branch keeps static files.

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
