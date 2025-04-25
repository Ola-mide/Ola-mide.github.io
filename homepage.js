const url = "https://script.google.com/macros/s/AKfycbx7c34m14o9u0FhhzDZuZiKUpV5OU4C7oROoZxLUCpIqshJe9n8EMuaRod50cxEIqP2/exec"

// fetching the data from each column in the sheet

fetch(`${url}?header=Cropmode`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("cropmode").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

// Nutrient Solution Tank
fetch(`${url}?header=Ntank`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ntank").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Ptank`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ptank").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Ktank`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("ktank").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

// Tray1 data
fetch(`${url}?header=N1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("n1").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=P1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("p1").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=K1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("k1").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Coltanklevel`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("coltanklevel").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Nutsoltanklevel`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("nutsoltanklevel").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Moisture1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam1").rows[2].cells;
        x[1].innerHTML = data;
        document.getElementById("moisture1").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=EC1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam1").rows[3].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=pH1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam1").rows[4].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Subtemp1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam1").rows[5].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Roomtemp1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam1").rows[6].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Growlight1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableStat1").rows[1].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Nutvalve1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableStat1").rows[2].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Coolingfan1`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableStat1").rows[3].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

// Tray 2 data
fetch(`${url}?header=N2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("n2").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=P2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("p2").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=K2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        document.getElementById("k2").innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Moisture2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam2").rows[2].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=EC2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam2").rows[3].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=pH2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam2").rows[4].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Subtemp2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam2").rows[5].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Roomtemp2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableParam2").rows[6].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Growlight2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableStat2").rows[1].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Nutvalve2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableStat2").rows[2].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

fetch(`${url}?header=Coolingfan2`)
    .then((response) => response.json())
    .then(({ data }) => {
        console.log(data);
        var x = document.getElementById("tableStat2").rows[3].cells;
        x[1].innerHTML = data;
    })
    .catch((error) => console.error('!!!!!!!!', error));

// Nutrient Solution Tank
const updateNtank = () => {
    fetch(`${url}?header=Ntank`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ntank").innerHTML = data;
            console.info("Updating Ntank status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updatePtank = () => {
    fetch(`${url}?header=Ptank`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ptank").innerHTML = data;
            console.info("Updating Ptank status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateKtank = () => {
    fetch(`${url}?header=Ktank`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("ktank").innerHTML = data;
            console.info("Updating Ktank status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateNPKtank = () => {
    var ntank = document.getElementById("ntank").innerHTML;
    var ptank = document.getElementById("ptank").innerHTML;
    var ktank = document.getElementById("ktank").innerHTML;
    var npktank = ntank + ":" + ptank + ":" + ktank;
    var x = document.getElementById("tableTank").rows[1].cells;
    x[1].innerHTML = npktank;
    console.info("Updating NPKtank status..");
};

const updateN1 = () => {
    fetch(`${url}?header=N1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("n1").innerHTML = data;
            console.info("Updating N1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateCropmode = () => {
    fetch(`${url}?header=Cropmode`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("cropmode").innerHTML = data;
            console.info("Updating Cropmode..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateP1 = () => {
    fetch(`${url}?header=P1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("p1").innerHTML = data;
            console.info("Updating P1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateK1 = () => {
    fetch(`${url}?header=K1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("k1").innerHTML = data;
            console.info("Updating K1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateColtanklevel = () => {
    fetch(`${url}?header=Coltanklevel`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("coltanklevel").innerHTML = data;
            console.info("Updating Collector tank status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateNutsoltanklevel = () => {
    fetch(`${url}?header=Nutsoltanklevel`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("nutsoltanklevel").innerHTML = data;
            console.info("Updating Nutrient Solution tank status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateNPK1 = () => {
    var n1 = document.getElementById("n1").innerHTML;
    var p1 = document.getElementById("p1").innerHTML;
    var k1 = document.getElementById("k1").innerHTML;
    var npk1 = n1 + ":" + p1 + ":" + k1;
    var x = document.getElementById("tableParam1").rows[1].cells;
    x[1].innerHTML = npk1;
    console.info("Updating NPK1 status..");
};

const updateMoisture1 = () => {
    fetch(`${url}?header=Moisture1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam1").rows[2].cells;
            x[1].innerHTML = data;
            document.getElementById("moisture1").innerHTML = data;
            console.info("Updating Moisture1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateEC1 = () => {
    fetch(`${url}?header=EC1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam1").rows[3].cells;
            x[1].innerHTML = data;
            console.info("Updating EC1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updatepH1 = () => {
    fetch(`${url}?header=pH1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam1").rows[4].cells;
            x[1].innerHTML = data;
            console.info("Updating pH1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateSubtemp1 = () => {
    fetch(`${url}?header=Subtemp1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam1").rows[5].cells;
            x[1].innerHTML = data;
            console.info("Updating Subtemp1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateRoomtemp1 = () => {
    fetch(`${url}?header=Roomtemp1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam1").rows[6].cells;
            x[1].innerHTML = data;
            console.info("Updating Roomtemp1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateGrowlight1 = () => {
    fetch(`${url}?header=Growlight1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableStat1").rows[1].cells;
            x[1].innerHTML = data;
            console.info("Updating Growlight1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateNutvalve1 = () => {
    fetch(`${url}?header=Nutvalve1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableStat1").rows[2].cells;
            x[1].innerHTML = data;
            console.info("Updating Nutvalve1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateCoolingfan1 = () => {
    fetch(`${url}?header=Coolingfan1`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableStat1").rows[3].cells;
            x[1].innerHTML = data;
            console.info("Updating Coolingfan1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

// Tray 2 functions
const updateN2 = () => {
    fetch(`${url}?header=N2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("n2").innerHTML = data;
            console.info("Updating N2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateP2 = () => {
    fetch(`${url}?header=P2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("p2").innerHTML = data;
            console.info("Updating P2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateK2 = () => {
    fetch(`${url}?header=K2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            document.getElementById("k2").innerHTML = data;
            console.info("Updating K1 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};
const updateNPK2 = () => {
    var n2 = document.getElementById("n2").innerHTML;
    var p2 = document.getElementById("p2").innerHTML;
    var k2 = document.getElementById("k2").innerHTML;
    var npk2 = n2 + ":" + p2 + ":" + k2;
    var x = document.getElementById("tableParam2").rows[1].cells;
    x[1].innerHTML = npk2;
    console.info("Updating NPK2 status..");
};

const updateMoisture2 = () => {
    fetch(`${url}?header=Moisture2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam2").rows[2].cells;
            x[1].innerHTML = data;
            console.info("Updating Moisture2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateEC2 = () => {
    fetch(`${url}?header=EC2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam2").rows[3].cells;
            x[1].innerHTML = data;
            console.info("Updating EC2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updatepH2 = () => {
    fetch(`${url}?header=pH2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam2").rows[4].cells;
            x[1].innerHTML = data;
            console.info("Updating EC2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateSubtemp2 = () => {
    fetch(`${url}?header=Subtemp2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam2").rows[5].cells;
            x[1].innerHTML = data;
            console.info("Updating Subtemp2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateRoomtemp2 = () => {
    fetch(`${url}?header=Roomtemp2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableParam2").rows[6].cells;
            x[1].innerHTML = data;
            console.info("Updating Roomtemp2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateGrowlight2 = () => {
    fetch(`${url}?header=Growlight2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableStat2").rows[1].cells;
            x[1].innerHTML = data;
            console.info("Updating Growlight2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateNutvalve2 = () => {
    fetch(`${url}?header=Nutvalve2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableStat2").rows[2].cells;
            x[1].innerHTML = data;
            console.info("Updating Nutvalve2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
};

const updateCoolingfan2 = () => {
    fetch(`${url}?header=Coolingfan2`)
        .then((response) => response.json())
        .then(({ data }) => {
            console.log(data);
            var x = document.getElementById("tableStat2").rows[3].cells;
            x[1].innerHTML = data;
            console.info("Updating Coolingfan2 status..");
        })
        .catch((error) => console.error('!!!!!!!!', error));
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


const autoRefresh = ({ anyFunction, interval = 3500 }) => {
    const execute = () => {
        anyFunction();
        setTimeout(execute, interval);
    };
    execute();
};

// Alerts
autoRefresh({
    anyFunction: updateColtanklevel,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNutsoltanklevel,
    interval: 3500,
});
// Alert for Nutrient Solution and Collector Tanks
autoRefresh({
    anyFunction: updateAlert1,
    interval: 60000,
});
// Alert for Tray1 Moisture
autoRefresh({
    anyFunction: updateAlert2,
    interval: 70000,
});

// Nutrient Solution Tank
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
    anyFunction: updateNPKtank,
    interval: 3500,
});

// Auto refresh tray1
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
    anyFunction: updateRoomtemp1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateGrowlight1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNutvalve1,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateCoolingfan1,
    interval: 3500,
});

// Auto refresh tray2

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
autoRefresh({
    anyFunction: updateRoomtemp2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateGrowlight2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateNutvalve2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateCoolingfan2,
    interval: 3500,
});
autoRefresh({
    anyFunction: updateCropmode,
    interval: 3500,
});