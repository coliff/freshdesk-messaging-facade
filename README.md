[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/freshdesk-messaging-facade/main/LICENSE)
[![GitHub Super-Linter](https://github.com/coliff/freshdesk-messaging-facade/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

# Freshdesk Messaging (formerly Freshchat) Facade

The Freshdesk Messaging widget loads more than 1.1 MB (gzipped) of JavaScript on page-load.

This facade (less than 1 KB gzipped!) prevents Freshdesk's JavaScript from loading until the chat widget is hovered over saving your users a lot of bandwidth and substantially improving page-load times.

## Comparison

|                       | Freshdesk Messaging JS | Freshdesk Messaging Facade |
| --------------------- | ---------------------- | -------------------------- |
| Number of assets      | 28                     | 2                          |
| Page Complete         | 6.3 s                  | 1.1 s                      |
| Network Transfer size | 1097 KB                | 1 KB                       |

## How it works

A div with an inline SVG of the Freshdesk Messaging icon is displayed in the bottom corner - appearing just like the real thing. When a user hovers within 300 pixels of it loads the Freshdesk Messaging script.

The Freshdesk Messaging widget and assets are large so it can take a couple of seconds for them to load.

## How to use

1. Load the CSS in your head: `<link rel="stylesheet" href="css/freshdesk-messaging-facade.min.css" />`

2. Add the script in your head: `<script src="js/freshdesk-messaging-facade.min.js" type="module" async></script>`

3. Load the web component within your page:

   ```htm
   <freshdesk-messaging-facade id="freshdesk-messaging-facade" data-token="" data-siteid="" hidden>
     <div class="freshdesk-messaging-icon" tabindex="0" role="button"></div>
   </freshdesk-messaging-facade>
   ```

   Add your 36-digit Freshdesk Messaging token to the `data-token` and your site's id to `data-siteid`

## Demo

https://coliff.github.io/freshdesk-messaging-facade/

## FAQs

- **Q. How can I customize the chat widget's color?**

  A. You can modify the `background-color` value of `.freshdesk-messaging-icon`.

- **Q. Can I load this from a CDN?**

  A. Yep, it's available on [JSDelivr](https://cdn.jsdelivr.net/gh/coliff/freshdesk-messaging-facade/).

- **Q. Does it work in IE 11?**

  A. No, but you can easily load the standard Freshdesk Messaging widget and add the `nomodule` attribute to it as a fallback for legacy browsers.
