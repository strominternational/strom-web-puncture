# STRØM International
Technical puncture for a website for our company, based on JAMstack and SSG 11ty that sits on github and automatically builds via Netlify.

## Important
- This repo is connected to netlify and automatically deploys on https://strom.international on merge of a pull request.
- Once you push a branch, you can create an according pull request on github from the branch commit.
- Pull requests have an automatic netlify deploy preview under a hashed URL per commit that you can look at from the pull request.
  - Once you created the pull request, even if kept open, each push will get it's own deploy preview on push.
- Lighthouse audit on pull request (https://github.com/jakejarvis/lighthouse-action)

## Working with this repo
* Checkout
* run npm install
* run npx @11ty/eleventy --serve
* Getting started with eleventy https://www.11ty.dev/docs/getting-started/

### Basics
- Source directory: _src
- Distribution directory: _site
- Template language .liquid
- Pure CSS (no preprocessor)

### Implemented stuff
- Normalize CSS https://necolas.github.io/normalize.css/
- Google Webfonts Inter und Playfair Display
- Main colors:
  - Neon yellow #ffff00
  - Black #000000
- Google Analytics
- Google Tag Manager
- Hotjar
- Mixpanel https://mixpanel.com/report/2150585/insights
- JSless Modals
- Favicon
- Preconnect / Prefetch DNS
- Unsplash mobile first responsive images
- Responsiveness / Media queries
- No CSS grid used yet, only flexbox
- Skeleton CSS framework http://getskeleton.com/
- Announcement bottom bar, used for data privacy and cookie agreement (page not existing yet!). 
  - Local storage implemented to only show it until it was agreed once and never again, unless local storage is cleared (type "localStorage.clear();" into console of dev tools to reset).
  - With pure CSS multiline truncation inside and "Read more" link.
  - With "I agree"-button and link to (not yet existing!) data privacy disclaimer page.
- Feather icons embedded via https://cdn.jsdelivr.net (no icons in use yet, replace JS function renders icons in frontend, maybe .svg assets needed?!?)
- https://strom.international is monitored round the clock by:
  - Uptimerobot https://uptimerobot.com
  - Statuscake is watching too: https://app.statuscake.com/
- We have https://live.browserstack.com/dashboard to test
- And Lambdatest https://accounts.lambdatest.com does regular screenshots of the skeleton.strom.international branch, for various platforms to see if layout is not broken on any device.


### Open points ...
- Aria roles
- Tab order
- Content area as layout-option, for sectioned onepage site
- Highlight box?
