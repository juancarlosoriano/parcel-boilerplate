import "/sass/style.scss";

console.log("hello world");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(() => console.log("Service Worker Registered."));
}
