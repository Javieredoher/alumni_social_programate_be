console.log("service worker");
//endpoint, authexpiration

self.addEventListener("push", (e) => {
    const data = e.data.json();
    console.log(data);
    // console.log("notificacion recibida");
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: "https://www.educamas.com.co/wp-content/uploads/2020/09/logoeducamasimbolo.png",
    });
});
