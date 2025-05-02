const url =
    "https://script.google.com/macros/s/AKfycbx7c34m14o9u0FhhzDZuZiKUpV5OU4C7oROoZxLUCpIqshJe9n8EMuaRod50cxEIqP2/exec";

var coltanklevel;
var nutsoltanklevel;
// fetching the data from each column in the sheet
fetch(`${url}?header=Cropmode`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("cropmode").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=Nutvalve1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        if (data == "ON") {
            document.getElementById("Nutvalve1").checked = true;
        } else if (data == "OFF") {
            document.getElementById("Nutvalve1").checked = false;
        }
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=Nutvalve2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        if (data == "ON") {
            document.getElementById("Nutvalve2").checked = true;
        } else if (data == "OFF") {
            document.getElementById("Nutvalve2").checked = false;
        }
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=Nutpump`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        if (data == "ON") {
            document.getElementById("nutpump").checked = true;
        } else if (data == "OFF") {
            document.getElementById("nutpump").checked = false;
        }
    })
    .catch((error) => console.error("!!!!!!!!", error));

google.charts.load("current", { packages: ["gauge"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ["Label", "Value"],
        [" ", 0],
    ]);

    var data2 = google.visualization.arrayToDataTable([
        ["Label", "Value"],
        [" ", 0],
    ]);

    var options = {
        width: 400,
        height: 120,
        redFrom: 0,
        redTo: 10,
        yellowFrom: 10,
        yellowTo: 25,
        minorTicks: 5,
    };

    var chart1 = new google.visualization.Gauge(
        document.getElementById("watdiv")
    );
    var chart2 = new google.visualization.Gauge(
        document.getElementById("nutdiv")
    );

    chart1.draw(data1, options);
    chart2.draw(data2, options);

    setInterval(function () {
        fetch(`${url}?header=Nutsoltanklevel`)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
                nutsoltanklevel = parseFloat(data);
            })
            .catch((error) => console.error("!!!!!!!!", error));

        data1.setValue(0, 1, nutsoltanklevel);
        chart1.draw(data2, options);
    }, 3500);

    setInterval(function () {
        fetch(`${url}?header=Coltanklevel`)
            .then((response) => response.json())
            .then(({ data }) => {
                console.log(data);
                coltanklevel = parseFloat(data);
            })
            .catch((error) => console.error("!!!!!!!!", error));

        data2.setValue(0, 1, coltanklevel);
        chart2.draw(data1, options);
    }, 3500);


}

const updateNutvalve1 = () => {
    fetch(`${url}?header=Nutvalve1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            if (data == "ON") {
                document.getElementById("Nutvalve1").checked = true;
            } else if (data == "OFF") {
                document.getElementById("Nutvalve1").checked = false;
            }
            console.info("Updating nutvalve1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

const updateNutvalve2 = () => {
    fetch(`${url}?header=Nutvalve2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            if (data == "ON") {
                document.getElementById("Nutvalve2").checked = true;
            } else if (data == "OFF") {
                document.getElementById("Nutvalve2").checked = false;
            }
            console.info("Updating nutvalve2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

const updateNutpump = () => {
    fetch(`${url}?header=Nutpump`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            if (data == "ON") {
                document.getElementById("nutpump").checked = true;
            } else if (data == "OFF") {
                document.getElementById("nutpump").checked = false;
            }
            console.info("Updating Nutpump status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

// starting fetch
fetch(`${url}?header=Growlight1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("growlight1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateGrowlight1 = () => {
    fetch(`${url}?header=Growlight1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("growlight1").innerHTML = data;
            console.info("Updating growlight1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Growlight2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("growlight2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateGrowlight2 = () => {
    fetch(`${url}?header=Growlight2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("growlight2").innerHTML = data;
            console.info("Updating growlight2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Roomtemp1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("roomtemp1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateRoomtemp1 = () => {
    fetch(`${url}?header=Roomtemp1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("roomtemp1").innerHTML = data;
            console.info("Updating roomtemp1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Coolingfan1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("coolingfan1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateCoolingfan1 = () => {
    fetch(`${url}?header=Coolingfan1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("coolingfan1").innerHTML = data;
            console.info("Updating coolingfan1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Roomtemp2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("roomtemp2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateRoomtemp2 = () => {
    fetch(`${url}?header=Roomtemp2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("roomtemp2").innerHTML = data;
            console.info("Updating roomtemp2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Coolingfan2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("coolingfan2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateCoolingfan2 = () => {
    fetch(`${url}?header=Coolingfan2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("coolingfan2").innerHTML = data;
            console.info("Updating coolingfan2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};


fetch(`${url}?header=Ntank`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ntank").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=Ptank`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ptank").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=Ktank`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ktank").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateNtank = () => {
    fetch(`${url}?header=Ntank`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ntank").innerHTML = data;
            console.info("Updating Ntank status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updatePtank = () => {
    fetch(`${url}?header=Ptank`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ptank").innerHTML = data;
            console.info("Updating Ptank status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateKtank = () => {
    fetch(`${url}?header=Ktank`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ktank").innerHTML = data;
            console.info("Updating Ktank status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};


fetch(`${url}?header=N1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("n1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=P1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("p1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=K1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("k1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateN1 = () => {
    fetch(`${url}?header=N1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("n1").innerHTML = data;
            console.info("Updating N1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateP1 = () => {
    fetch(`${url}?header=P1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("p1").innerHTML = data;
            console.info("Updating P1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateK1 = () => {
    fetch(`${url}?header=K1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("k1").innerHTML = data;
            console.info("Updating K1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateNPK1 = () => {
    var n1 = document.getElementById("n1").innerHTML;
    var p1 = document.getElementById("p1").innerHTML;
    var k1 = document.getElementById("k1").innerHTML;
    var npk1 = n1 + ":" + p1 + ":" + k1;
    document.getElementById("npk1").innerHTML = npk1;
    console.info("Updating NPK1 status..");
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

fetch(`${url}?header=EC1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ec1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateEC1 = () => {
    fetch(`${url}?header=EC1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ec1").innerHTML = data;
            console.info("Updating ec1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=pH1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ph1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updatepH1 = () => {
    fetch(`${url}?header=pH1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ph1").innerHTML = data;
            console.info("Updating ph1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Subtemp1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("subtemp1").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateSubtemp1 = () => {
    fetch(`${url}?header=Subtemp1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("subtemp1").innerHTML = data;
            console.info("Updating subtemp1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=N2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("n2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=P2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("p2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

fetch(`${url}?header=K2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("k2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateN2 = () => {
    fetch(`${url}?header=N2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("n2").innerHTML = data;
            console.info("Updating N2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateP2 = () => {
    fetch(`${url}?header=P2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("p2").innerHTML = data;
            console.info("Updating P2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateK2 = () => {
    fetch(`${url}?header=K2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("k2").innerHTML = data;
            console.info("Updating K1 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};
const updateNPK2 = () => {
    var n2 = document.getElementById("n2").innerHTML;
    var p2 = document.getElementById("p2").innerHTML;
    var k2 = document.getElementById("k2").innerHTML;
    var npk2 = n2 + ":" + p2 + ":" + k2;
    document.getElementById("npk2").innerHTML = npk2;
    console.info("Updating NPK2 status..");
};

fetch(`${url}?header=Moisture2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("moisture2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateMoisture2 = () => {
    fetch(`${url}?header=Moisture2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("moisture2").innerHTML = data;
            console.info("Updating moisture2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=EC2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ec2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateEC2 = () => {
    fetch(`${url}?header=EC2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ec2").innerHTML = data;
            console.info("Updating ec2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=pH2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ph2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updatepH2 = () => {
    fetch(`${url}?header=pH2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ph2").innerHTML = data;
            console.info("Updating ph2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

fetch(`${url}?header=Subtemp2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("subtemp2").innerHTML = data;
    })
    .catch((error) => console.error("!!!!!!!!", error));

const updateSubtemp2 = () => {
    fetch(`${url}?header=Subtemp2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("subtemp2").innerHTML = data;
            console.info("Updating subtemp2 status..");
        })
        .catch((error) => console.error("!!!!!!!!", error));
};

const updateAlert1 = () => {
    if (coltanklevel <= 2.62 && nutsoltanklevel <= 8.34) {
        alert("Nutrient Solution Tank Level is LOW!!!");
    };
};
const updateAlert2 = () => {
    var moisture1 = parseFloat(document.getElementById("moisture1").innerHTML);
    if (moisture1 <= 20) {
        alert("Moisture Content in Tray1 is LOW!!!");
    };
};
// ending fetch

const autoRefresh = ({ anyFunction, interval = 3500 }) => {
    const execute = () => {
        anyFunction();
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
    anyFunction: updateNutvalve1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNutvalve2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNutpump,
    interval: 3500,
});
//
autoRefresh({
    anyFunction: updateGrowlight1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateGrowlight2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateRoomtemp1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateCoolingfan1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateRoomtemp2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateCoolingfan2,
    interval: 3500,
});

autoRefresh({
    anyFunction: updateNtank,
    interval: 3500,
});
autoRefresh({
    anyFunction: updatePtank,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateKtank,
    interval: 3500,
});


autoRefresh({
    anyFunction: updateN1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateP1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateK1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNPK1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateMoisture1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateEC1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updatepH1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateSubtemp1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateN2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateP2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateK2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNPK2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateMoisture2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateEC2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updatepH2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateSubtemp2,
    interval: 3500,
});
//

// Checking coolingfan status data
var nutvalve1 = "";
var nutvalve2 = "";
var nutpump = "";
function handleClick(cb) {
    if (document.getElementById("Nutvalve1").checked == true) {
        nutvalve1 = "ON";
    } else {
        nutvalve1 = "OFF";
    }

    if (document.getElementById("Nutvalve2").checked == true) {
        nutvalve2 = "ON";
    } else {
        nutvalve2 = "OFF";
    }

    if (document.getElementById("nutpump").checked == true) {
        nutpump = "ON";
    } else {
        nutpump = "OFF";
    }

    // Organising Data to send to Sheets
    var keyValuePairs = [];
    var cropmode = document.getElementById("cropmode").innerHTML;
    // not on page
    var ntank = document.getElementById("ntank").innerHTML;
    var ptank = document.getElementById("ptank").innerHTML;
    var ktank = document.getElementById("ktank").innerHTML;
    var growlight1 = document.getElementById("growlight1").innerHTML;
    var growlight2 = document.getElementById("growlight2").innerHTML;
    var roomtemp1 = document.getElementById("roomtemp1").innerHTML;
    var coolingfan1 = document.getElementById("coolingfan1").innerHTML;
    var roomtemp2 = document.getElementById("roomtemp2").innerHTML;
    var coolingfan2 = document.getElementById("coolingfan2").innerHTML;
    var n1 = document.getElementById("n1").innerHTML;
    var p1 = document.getElementById("p1").innerHTML;
    var k1 = document.getElementById("k1").innerHTML;
    var moisture1 = document.getElementById("moisture1").innerHTML;
    var ec1 = document.getElementById("ec1").innerHTML;
    var ph1 = document.getElementById("ph1").innerHTML;
    var subtemp1 = document.getElementById("subtemp1").innerHTML;
    var n2 = document.getElementById("n2").innerHTML;
    var p2 = document.getElementById("p2").innerHTML;
    var k2 = document.getElementById("k2").innerHTML;
    var moisture2 = document.getElementById("moisture2").innerHTML;
    var ec2 = document.getElementById("ec2").innerHTML;
    var ph2 = document.getElementById("ph2").innerHTML;
    var subtemp2 = document.getElementById("subtemp2").innerHTML;

    keyValuePairs.push("Cropmode" + "=" + cropmode);
    keyValuePairs.push("Coltanklevel" + "=" + coltanklevel);
    keyValuePairs.push("Nutsoltanklevel" + "=" + nutsoltanklevel);
    keyValuePairs.push("Nutvalve1" + "=" + nutvalve1);
    keyValuePairs.push("Nutvalve2" + "=" + nutvalve2);
    keyValuePairs.push("Nutpump" + "=" + nutpump);
    // not on page
    keyValuePairs.push("Ntank" + "=" + "'" + ntank);
    keyValuePairs.push("Ptank" + "=" + "'" + ptank);
    keyValuePairs.push("Ktank" + "=" + "'" + ktank);
    keyValuePairs.push("Growlight1" + "=" + growlight1);
    keyValuePairs.push("Growlight2" + "=" + growlight2);
    keyValuePairs.push("Roomtemp1" + "=" + roomtemp1);
    keyValuePairs.push("Coolingfan1" + "=" + coolingfan1);
    keyValuePairs.push("Roomtemp2" + "=" + roomtemp2);
    keyValuePairs.push("Coolingfan2" + "=" + coolingfan2);
    keyValuePairs.push("N1" + "=" + "'" + n1);
    keyValuePairs.push("P1" + "=" + "'" + p1);
    keyValuePairs.push("K1" + "=" + "'" + k1);
    keyValuePairs.push("Moisture1" + "=" + moisture1);
    keyValuePairs.push("EC1" + "=" + ec1);
    keyValuePairs.push("pH1" + "=" + ph1);
    keyValuePairs.push("Subtemp1" + "=" + subtemp1);
    keyValuePairs.push("N2" + "=" + "'" + n2);
    keyValuePairs.push("P2" + "=" + "'" + p2);
    keyValuePairs.push("K2" + "=" + "'" + k2);
    keyValuePairs.push("Moisture2" + "=" + moisture2);
    keyValuePairs.push("EC2" + "=" + ec2);
    keyValuePairs.push("pH2" + "=" + ph2);
    keyValuePairs.push("Subtemp2" + "=" + subtemp2);

    var formDataString = keyValuePairs.join("&");
    console.log(formDataString);
    //   Send a POST request to your Google Apps Script
    fetch(
        "https://script.google.com/macros/s/AKfycbx7c34m14o9u0FhhzDZuZiKUpV5OU4C7oROoZxLUCpIqshJe9n8EMuaRod50cxEIqP2/exec",
        {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
        }
    )
        .then(function (response) {
            // Check if the request was successful
            if (response) {
                return response; // Assuming your script returns JSON response
            } else {
                throw new Error("Failed to submit data.");
            }
        })
        .catch(function (error) {
            // Handle errors, you can display an error message here
            console.error(error);
        });
}