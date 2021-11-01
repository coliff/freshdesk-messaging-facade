[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/freshdesk-messaging-facade/main/LICENSE)
[![GitHub Super-Linter](https://github.com/coliff/freshdesk-messaging-facade/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![NPM Version](https://img.shields.io/npm/v/freshdesk-messaging-facade)](https://www.npmjs.com/package/freshdesk-messaging-facade)
[![NPM Downloads](https://img.shields.io/npm/dt/freshdesk-messaging-facade.svg)](https://www.npmjs.com/package/freshdesk-messaging-facade)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/coliff/freshdesk-messaging-facade.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/coliff/freshdesk-messaging-facade/context:javascript)

# Freshdesk Messaging (formerly Freshchat) Facade

The [Freshdesk Messaging](https://developers.freshchat.com/web-sdk/) widget loads more than 1.1 MB (gzipped) of JavaScript on page-load.

This facade (less than 1 KB gzipped) prevents Freshdesk's JavaScript from loading until the chat widget is hovered over saving your users a lot of bandwidth and substantially improving page-load times.

## Comparison

|                       | Freshdesk Messaging JS | Freshdesk Messaging Facade |
| --------------------- | ---------------------- | -------------------------- |
| Number of assets      | 28                     | 2                          |
| Page Complete         | 6.3 s                  | 1.1 s                      |
| Network Transfer size | 1097 KB                | 1 KB                       |

## How it works

A div with an inline SVG of the Freshdesk Messaging icon is displayed in the bottom corner - appearing just like the real thing. When a user hovers within 300 pixels of it loads the Freshdesk Messaging script. A simple animated icon is displayed as the script loads.

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/coliff/freshdesk-messaging-facade)
- Clone the repo `git clone https://github.com/coliff/freshdesk-messaging-facade.git`
- Install with [npm](https://www.npmjs.com/package/freshdesk-messaging-facade) `npm install freshdesk-messaging-facade`
- Install with [yarn](https://yarnpkg.com/en/package/freshdesk-messaging-facade) `yarn add freshdesk-messaging-facade`
- Install with [Composer](https://packagist.org/packages/coliff/freshdesk-messaging-facade) `composer require coliff/freshdesk-messaging-facade`

## Usage

1. Load the CSS and JS in your head:

   ```html
   <link rel="stylesheet" href="css/freshdesk-messaging-facade.min.css">
   <script src="js/freshdesk-messaging-facade.min.js" type="module" async></script>
   ```

2. Load the web component within your page:

   ```html
   <freshdesk-messaging-facade id="freshdesk-messaging-facade" data-token="" data-siteid="" hidden>
     <div id="freshdesk-messaging-icon" tabindex="0" role="button" aria-label="Chat"></div>
   </freshdesk-messaging-facade>
   ```

   Add your 36-digit Freshdesk Messaging token to the `data-token` and your site's id to `data-siteid`

## Demo

https://coliff.github.io/freshdesk-messaging-facade/

## FAQs

- **Q. How can I customize the chat widget's color?**

  A. You can modify the `background-color` value of `#freshdesk-messaging-icon`.

- **Q. Can I load this from a CDN?**

  A. Yep, it's available on [JSDelivr](https://cdn.jsdelivr.net/npm/freshdesk-messaging-facade/).

- **Q. Does it work in IE 11?**

  A. No, but you can easily load the standard Freshdesk Messaging widget and add the `nomodule` attribute to it as a fallback for legacy browsers. [View Gist](https://gist.github.com/coliff/fe18a182c8224d8d92ae1c31a31d756f)

## Known Issues

- Some content blockers on iOS may block the Freshdesk Messaging widget leading to the facade being non-functioning.
- The Freshdesk Messaging widget and assets are large so it can take a couple of seconds for them to load.

## Credits and thanks

- This project is inspired by the [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed) project by Paul Irish.
- Thanks to Yoksel for the useful [SVG to CSS converter](https://yoksel.github.io/url-encoder/)
