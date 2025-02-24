let km = prompt ('Quanti chilometri devi percorrere?');

km = parseInt(km);
console.log(km)

let year = prompt ('Quanti anni hai?');

year = parseInt(year);
console.log(year)

let costTicket;

let discount;

if (year >= 18 && year <= 64) {
    costTicket = km * 0.21;
} else if (year <= 17) {
    costTicket = (km * 0.21);
    discount = (costTicket * 20) /100;
    costTicket = costTicket - discount;
} else if (year >= 65) {
    costTicket = km * 0.21;
    discount = (costTicket * 40) /100;
    costTicket = costTicket - discount;
}

costTicket = costTicket.toFixed(2);
console.log(`Il costo del biglietto è di ${costTicket} €`);