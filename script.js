function Updatetime() {
    const currentyear = new Date().getFullYear();
    const newYear = new Date(`january 1 ${currentyear + 1} 00:00:00`)
    const currentDate = new Date();
    const diff = newYear - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    //console.log(d + " " + h + " " + m + " " + s + " ");
}

setInterval(Updatetime, 1000)