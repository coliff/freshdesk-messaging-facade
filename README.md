[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/freshdesk-messaging-facade/main/LICENSE)
[![GitHub Super-Linter](https://github.com/coliff/freshdesk-messaging-facade/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm Version](https://img.shields.io/npm/v/freshdesk-messaging-facade)](https://www.npmjs.com/package/freshdesk-messaging-facade)
[![npm Downloads](https://img.shields.io/npm/dt/freshdesk-messaging-facade.svg)](https://www.npmjs.com/package/freshdesk-messaging-facade)

# Freshdesk Messaging (Freshchat) Facade

The [Freshchat](https://developers.freshchat.com/web-sdk/) widget loads more than 1.1 MB (gzipped) of JavaScript on page-load.

This facade (less than 1 KB gzipped) prevents Freshchat's JavaScript from loading until the chat widget is hovered over saving your users a lot of bandwidth and substantially improving page-load times.

## Comparison

|                       | Freshchat JS | Freshchat Facade |
| --------------------- | ------------ | ---------------- |
| Number of assets      | 28           | 2                |
| Page Complete         | 6.3 s        | 1.1 s            |
| Network Transfer size | 1097 KB      | 1 KB             |

## How it works

A div with an inline SVG of the Freshchat icon is displayed in the bottom corner - appearing just like the real thing. When a user hovers within 200 pixels of it loads the Freshdesk Messaging script. A simple animated icon is displayed as the script loads.

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
   <link rel="stylesheet" href="css/freshdesk-messaging-facade.min.css" media="screen">
   <script src="js/freshdesk-messaging-facade.min.js" type="module" async></script>
   ```

2. Load the web component within your page:

   ```html
   <freshdesk-messaging-facade id="freshdesk-messaging-facade" data-token="" data-siteid="" hidden>
     <div id="freshdesk-messaging-icon" tabindex="0" role="button" aria-label="Chat"></div>
   </freshdesk-messaging-facade>
   ```

   Add your 36-digit Freshchat token to the `data-token` and your site's id to `data-siteid`.

   You can optionally add a `data-host` attribute to set the host of the widget. The default is `https://wchat.freshchat.com`.

## Demo

https://coliff.github.io/freshdesk-messaging-facade/

## FAQs

- **Q. How can I customize the chat widget's color?**

  A. You can modify the `background-color` value of `#freshdesk-messaging-icon`.

- **Q. Can I load this from a CDN?**

  A. Yep, it's available on [JSDelivr](https://www.jsdelivr.com/package/npm/freshdesk-messaging-facade).

- **Q. Does it work in IE 11?**

  A. No, but you can easily load the standard Freshdesk Messaging widget and add the `nomodule` attribute to it as a fallback for legacy browsers. [View Gist](https://gist.github.com/coliff/fe18a182c8224d8d92ae1c31a31d756f)

## Known Issues

- Some content blockers on iOS may block the Freshdesk Messaging widget leading to the facade being non-functioning.
- The Freshdesk Messaging widget and assets are large so it can take a couple of seconds for them to load.

## Credits and thanks

- This project is inspired by the [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed) project by Paul Irish.
- Thanks to Yoksel for the useful [SVG to CSS converter](https://yoksel.github.io/url-encoder/)
