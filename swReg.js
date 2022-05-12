window.addEventListener("load", function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(
      (reg) => {
        // periodic sync only works for a installed pwa and not in a chrome tab
        /*
        reg.periodicSync
          .register("get-app-update", { minInterval: 1 * 60 * 60 * 1000 })
          .catch((e) => console.log("SW periodic sync failed!", e));
          */
        listenForWaitingServiceWorker(reg, promptUserToRefresh);
      },
      // remove true in the line below for debug
      (err) => true || console.log("ServiceWorker reg fail: ", err)
    );
  }
});

function listenForWaitingServiceWorker(reg, callback) {
  function awaitStateChange() {
    reg.installing.addEventListener("statechange", function () {
      if (this.state === "installed") callback(reg);
    });
  }
  if (!reg) return;
  if (reg.waiting) return callback(reg);
  if (reg.installing) awaitStateChange();
  reg.addEventListener("updatefound", awaitStateChange);
}

let refreshing;
navigator.serviceWorker.addEventListener("controllerchange", function () {
  if (refreshing) return;
  refreshing = true;
  window.location.reload();
});

function promptUserToRefresh(reg) {
  document.dispatchEvent(
    new CustomEvent("serviceWorkerUpdateEvent", { detail: reg })
  );
}
