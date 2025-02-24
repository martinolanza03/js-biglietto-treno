let km = prompt ('Quanti chilometri devi percorrere?');

km = parseInt(km);

let year = prompt ('Quanti anni hai?');

year = parseInt(year);

let costTicket;

if (year >= 18 && year <= 64) {
    costTicket = km * 0.21;
} else if (year <= 17) {
    costTicket = ((km * 0.21) * 20) / 100;
} else if (year >= 65) {
    costTicket = ((km * 0.21) * 40) / 100;
}

costTicket = costTicket.toFixed(2);
console.log(`Il costo del biglietto è di ${costTicket} €`);