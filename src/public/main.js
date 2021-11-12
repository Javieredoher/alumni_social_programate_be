const PUBLIC_VAPID_KEY =
    "BCcmd5UFJdaBy3XczKoOKM4MuUijZD6HVahjVyQm16zLagjBfyC286qhNqHFB6y7rDRJdLIYg6MVSzy872cbU8Q";
// dicumentation , send notification
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
const subscription = async () => {
    //service worker
    const register = await navigator.serviceWorker.register("/worker.js", {
        scope: "/",
    });
    console.log("new service worker");
    //conect with the serice and sent the notification
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
    });
    //conecct with the service
    await fetch("/subscription", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log("suscrito");
};
subscription();
