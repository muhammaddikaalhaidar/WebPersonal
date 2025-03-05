function addRow() {
    let table = document.getElementById("deviceTable");
    let row = table.insertRow();
    row.innerHTML = `
        <td><input type="text" placeholder="Nama perangkat"></td>
        <td><input type="number" class="watt" min="0" value="0"></td>
        <td><input type="number" class="hours" min="0" value="0"></td>
    `;
}

function calculateCarbon() {
    let watts = document.querySelectorAll(".watt");
    let hours = document.querySelectorAll(".hours");

    let totalKWh = 0;
    for (let i = 0; i < watts.length; i++) {
        let watt = parseFloat(watts[i].value) || 0;
        let hour = parseFloat(hours[i].value) || 0;
        totalKWh += (watt * hour) / 1000; // Konversi ke kWh
    }

    let carbonEmission = totalKWh * 0.85; // Faktor emisi listrik (0.85 kg CO2 per kWh)
    
    document.getElementById("result").innerHTML = 
        `Total konsumsi listrik: <strong>${totalKWh.toFixed(2)} kWh</strong> per hari<br>
         Jejak karbon: <strong>${carbonEmission.toFixed(2)} kg CO2</strong> per hari`;
}
