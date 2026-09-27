/*!
 * Freshdesk Messaging Facade v1.3.2 (https://github.com/coliff/freshdesk-messaging-facade)
 */

class FreshchatFacade extends HTMLElement {
  connectedCallback() {
    // it's hidden by default for browsers with JavaScript disabled
    // this removes the hidden attribute
    this.removeAttribute("hidden");

    this.siteId = this.getAttribute("data-siteid");
    this.token = this.getAttribute("data-token");
    this.host = this.getAttribute("data-host") || "https://wchat.freshchat.com";

    const load = () => {
      FreshchatFacade.warmConnections(this.host);
      this.addScript();
    };

    this.addEventListener("pointerover", load, { once: true });
    this.addEventListener("focusin", load, { once: true });
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

  static warmConnections(host) {
    if (FreshchatFacade.preconnected) {
      return;
    }
    FreshchatFacade.addPrefetch("preconnect", host);
    FreshchatFacade.addPrefetch("preconnect", "https://assetscdn-wchat.freshchat.com");
    FreshchatFacade.preconnected = true;
  }

  addScript() {
    // only load the widget script once (pointer and focus can both trigger this)
    if (this.scriptAdded) {
      return;
    }
    this.scriptAdded = true;

    const icon = this.querySelector("#freshdesk-messaging-icon");

    // display a loading spinner while the script is loading
    if (icon) {
      icon.classList.add("freshdesk-messaging-icon-loading");
    }

    const script = document.createElement("script");
    script.src = `${this.host}/js/widget.js`;

    // hide the button if script fails to load
    script.onerror = () => {
      this.setAttribute("hidden", "hidden");
    };

    // Initialize widget after script loads
    script.onload = () => {
      fcWidget.init({ token: this.token, host: this.host, siteId: this.siteId, config: { headerProperty: { hideChatButton: false } } });

      // Hide the facade once the real one has loaded
      fcWidget.on("widget:opened", () => {
        this.setAttribute("hidden", "hidden");
      });
    };

    document.head.append(script);
  }
}

// Register custom element
customElements.define("freshdesk-messaging-facade", FreshchatFacade);
