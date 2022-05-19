class SwModal extends HTMLElement {
  constructor() {
    super();
    const style = /* css */ `<style>
      #pwa-upgrade-modal {
        background: coral;
        margin: 0 auto;
        width: 100%;
        padding: 0.75rem 0.25rem;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-family: sans-serif;
      }
      button {
        border: none;
        padding: 0.2rem 1rem;
        border-radius: 2rem;
        background: yellow; 
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        font-weight: 500;
        color: coral;
      }
      button:hover {
        cursor: pointer;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        transform: translateY(-3px);
      }
      #pwa-upgrade-modal p {
        color: yellow;
        font-weight: 700;
        text-align: center;
      }
    </style>`;
    const html = /* html */ `
      <div style="display:none" id="pwa-upgrade-modal">
        <button id="later">Update Later</button>
        <p>Update Available</p>
        <button id="now">Update Now</button>
      </div>`;
    this.innerHTML = style + html;
  }
}

customElements.define("sw-modal", SwModal);

const pwaUpgradeModal = document.getElementById("pwa-upgrade-modal");
const later = document.getElementById("later");
const now = document.getElementById("now");
let reg = null;

later.addEventListener("click", () => {
  pwaUpgradeModal.style.display = "none";
});

now.addEventListener("click", () => {
  pwaUpgradeModal.style.display = "none";
  if (reg && reg.waiting) reg.waiting.postMessage("skipWaiting");
});

document.addEventListener("serviceWorkerUpdateEvent", (e) => {
  pwaUpgradeModal.style.display = "flex";
  reg = e.detail;
});
