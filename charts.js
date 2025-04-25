var moisture = document.getElementById("moisture").innerHTML;
var celcius = document.getElementById("celcius").innerHTML;
const url =
    "https://script.google.com/macros/s/AKfycbx7c34m14o9u0FhhzDZuZiKUpV5OU4C7oROoZxLUCpIqshJe9n8EMuaRod50cxEIqP2/exec";

// fetching the data from each column in the sheet
fetch(`${url}?header=Cropmode`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("cropmode").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const url =
        "https://script.google.com/macros/s/AKfycbyoQhA6ml_tGl0JxDh5V24peneVIcjieO_tkgFVJCJEtDuds3RP4xYC-ICSQRiOAA28YQ/exec";

    fetch(`${url}?header=pH1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var pHdata1 = google.visualization.arrayToDataTable(data);
            var pHoptions1 = {
                title: "Time series of pH",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "pH" } },
                hAxes: { 0: { title: "Time" } },
            };
            var pHchart1 = new google.visualization.LineChart(
                document.getElementById("pHchart1")
            );
            pHchart1.draw(pHdata1, pHoptions1);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=EC1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var ECdata1 = google.visualization.arrayToDataTable(data);
            var ECoptions1 = {
                title: "Time series of EC (Electrical Conductivity)",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "EC " + "(S/m)" } },
                hAxes: { 0: { title: "Time" } },
            };
            var ECchart1 = new google.visualization.LineChart(
                document.getElementById("ECchart1")
            );
            ECchart1.draw(ECdata1, ECoptions1);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=Moisture1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var mstrdata1 = google.visualization.arrayToDataTable(data);
            var mstroptions1 = {
                title: "Time series of Moisture ",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "Moisture " + moisture } },
                hAxes: { 0: { title: "Time" } },
            };
            var mstrchart1 = new google.visualization.LineChart(
                document.getElementById("mstrchart1")
            );
            mstrchart1.draw(mstrdata1, mstroptions1);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=Roomtemp1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var roomtempdata1 = google.visualization.arrayToDataTable(data);
            var roomtempoptions1 = {
                title: "Time series of Room Temperature",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "Room Temperature " + celcius } },
                hAxes: { 0: { title: "Time" } },
            };
            var roomtempchart1 = new google.visualization.LineChart(
                document.getElementById("roomtempchart1")
            );
            roomtempchart1.draw(roomtempdata1, roomtempoptions1);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=Subtemp1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var subtempdata1 = google.visualization.arrayToDataTable(data);
            var subtempoptions1 = {
                title: "Time series of Substrate Temperature",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "Substrate Temperature " + celcius } },
                hAxes: { 0: { title: "Time" } },
            };
            var subtempchart1 = new google.visualization.LineChart(
                document.getElementById("subtempchart1")
            );
            subtempchart1.draw(subtempdata1, subtempoptions1);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=pH2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var pHdata2 = google.visualization.arrayToDataTable(data);
            var pHoptions2 = {
                title: "Time series of pH",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "pH" } },
                hAxes: { 0: { title: "Time" } },
            };
            var pHchart2 = new google.visualization.LineChart(
                document.getElementById("pHchart2")
            );
            pHchart2.draw(pHdata2, pHoptions2);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=EC2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var ECdata2 = google.visualization.arrayToDataTable(data);
            var ECoptions2 = {
                title: "Time series of EC (Electrical Conductivity)",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "EC " + "(S/m)" } },
                hAxes: { 0: { title: "Time" } },
            };
            var ECchart2 = new google.visualization.LineChart(
                document.getElementById("ECchart2")
            );
            ECchart2.draw(ECdata2, ECoptions2);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=Moisture2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var mstrdata2 = google.visualization.arrayToDataTable(data);
            var mstroptions2 = {
                title: "Time series of Moisture ",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "Moisture " + moisture } },
                hAxes: { 0: { title: "Time" } },
            };
            var mstrchart2 = new google.visualization.LineChart(
                document.getElementById("mstrchart2")
            );
            mstrchart2.draw(mstrdata2, mstroptions2);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=Roomtemp2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var roomtempdata2 = google.visualization.arrayToDataTable(data);
            var roomtempoptions2 = {
                title: "Time series of Room Temperature",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "Room Temperature " + celcius } },
                hAxes: { 0: { title: "Time" } },
            };
            var roomtempchart2 = new google.visualization.LineChart(
                document.getElementById("roomtempchart2")
            );
            roomtempchart2.draw(roomtempdata2, roomtempoptions2);
        })
        .catch((error) => console.error("!!!!!!!!", error));

    fetch(`${url}?header=Subtemp2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var subtempdata2 = google.visualization.arrayToDataTable(data);
            var subtempoptions2 = {
                title: "Time series of Substrate Temperature",
                legend: { position: "bottom" },
                vAxes: { 0: { title: "Substrate Temperature " + celcius } },
                hAxes: { 0: { title: "Time" } },
            };
            var subtempchart2 = new google.visualization.LineChart(
                document.getElementById("subtempchart2")
            );
            subtempchart2.draw(subtempdata2, subtempoptions2);
        })
        .catch((error) => console.error("!!!!!!!!", error));
}
fetch(`${url}?header=Coltanklevel`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("coltanklevel").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));
    
const updateColtanklevel = () => {
    fetch(`${url}?header=Coltanklevel`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("coltanklevel").innerHTML = data;
            console.info("Updating Collector tank status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Nutsoltanklevel`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("nutsoltanklevel").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateNutsoltanklevel = () => {
    fetch(`${url}?header=Nutsoltanklevel`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("nutsoltanklevel").innerHTML = data;
            console.info("Updating Nutrient Solution tank status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Moisture1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("moisture1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateMoisture1 = () => {
    fetch(`${url}?header=Moisture1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("moisture1").innerHTML = data;
            console.info("Updating moisture1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

const updateAlert1 = () => {
    var coltanklevel = parseInt(document.getElementById("coltanklevel").innerHTML);
    var nutsoltanklevel = parseInt(document.getElementById("nutsoltanklevel").innerHTML);
    if (coltanklevel <= 10 && nutsoltanklevel <= 10) {
        alert("Nutrient Solution Tank Level is LOW!!!");
    };
};
const updateAlert2 = () => {
    var moisture1 = parseInt(document.getElementById("moisture1").innerHTML);
    if (moisture1 <= 10) {
        alert("Moisture Content in Tray1 is LOW!!!");
    };
};
const autoRefresh = ({ anyFunction, interval = 5000 }) => {
    const execute = () => {
        anyFunction();
        console.log("refreshing!!!");
        setTimeout(execute, interval);
    };
    execute();
};

autoRefresh({
    anyFunction: updateAlert1,
    interval: 60000,
});
autoRefresh({
    anyFunction: updateAlert2,
    interval: 70000,
});
autoRefresh({
    anyFunction: updateColtanklevel,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNutsoltanklevel,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateMoisture1,
    interval: 3500,
});

autoRefresh({
    anyFunction: drawChart,
    interval: 5000,
});