class SwModal extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /* html */ `
<div style="display:hidden">
  <button>Update Later</button>
  <p>Update Available</p>
  <button>Update Now</button>
</div>`;
  }
}

customElements.define("sw-modal", SwModal);
