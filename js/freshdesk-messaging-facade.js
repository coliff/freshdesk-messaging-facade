/*!
 * Freshdesk Messaging Facade v1.3.2 (https://github.com/coliff/freshdesk-messaging-facade)
 */

// it's hidden by default for browsers with JavaScript disabled
// this removes the hidden attribute
document.getElementById("freshdesk-messaging-facade").removeAttribute("hidden");

class FreshchatFacade extends HTMLElement {
  connectedCallback() {
    this.siteId = this.getAttribute("data-siteid");
    this.token = this.getAttribute("data-token");
    this.host = this.getAttribute("data-host") || "https://wchat.freshchat.com";

    this.addEventListener("pointerover", FreshchatFacade.warmConnections, { once: true });

    this.addEventListener("pointerover", () => this.addScript(), { once: true });
  }

  // Add a <link rel=preconnect ...> to the head
  static addPrefetch(kind, url, as) {
    const linkEl = document.createElement("link");
    linkEl.rel = kind;
    linkEl.href = url;
    if (as) {
      linkEl.as = as;
    }
    document.head.append(linkEl);
  }

  static warmConnections() {
    if (FreshchatFacade.preconnected) return;
    FreshchatFacade.addPrefetch("preconnect", this.host);
    FreshchatFacade.addPrefetch("preconnect", "https://assetscdn-wchat.freshchat.com");
    FreshchatFacade.preconnected = true;
  }

  addScript() {
    const script = document.createElement("script");
    script.src = "https://wchat.freshchat.com/js/widget.js";
    document.head.append(script);

    // hide the button if script fails to load
    script.onerror = function () {
      document.getElementById("freshdesk-messaging-facade").setAttribute("hidden", "hidden");
    };

    // Initialize widget after script loads
    script.onload = () => {
      // display a loading spinner when script is loading
      document.getElementById("freshdesk-messaging-icon").classList.add("freshdesk-messaging-icon-loading");

      // eslint-disable-next-line no-undef
      fcWidget.init({ token: this.token, host: this.host, siteId: this.siteId, config: { headerProperty: { hideChatButton: false } } });

      // Hide the facade once the real one has loaded
      // eslint-disable-next-line no-undef
      fcWidget.on("widget:opened", function () {
        document.getElementById("freshdesk-messaging-facade").setAttribute("hidden", "hidden");
      });
    };
  }
}

// Register custom element
customElements.define("freshdesk-messaging-facade", FreshchatFacade);
