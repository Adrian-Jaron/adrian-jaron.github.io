const setup = () => {
    let start = new Date('2025-04-01T12:10:30')
    let event = new Date();
    console.log(start);


    console.log((start.getDay()));

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toString" + event.toString());
}

