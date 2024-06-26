let printers = [];
if (window.localStorage.getItem('printers')) {
    printers = JSON.parse(window.localStorage.getItem('printers'));
  } else printers = [{ model: 'HP LaserJet Pro', color: 'Black', brand: 'HP', stock: 10, working: 8, faulty: 1, inUse: 1 },
    { model: 'Epson Workforce', color: 'Color', brand: 'Epson', stock: 5, working: 4, faulty: 0, inUse: 1 }];
window.localStorage.setItem('printers', JSON.stringify(printers));
// Sample data for cartridges
let cartridges = [
    { model: 'Canon PG-245', color: 'Black', brand: 'Canon', stock: 20, inPrinter: 15, damaged: 2, inStock: 3 },
    { model: 'HP 61', color: 'Color', brand: 'HP', stock: 10, inPrinter: 8, damaged: 1, inStock: 1 }
];

// Populate printer list
const printerList = document.getElementById('printers');
function renderPrinters() {
    printerList.innerHTML = "";
    printers.forEach(printer => {
        const item = document.createElement('li');
        item.textContent = `Model: ${printer.model}, Color: ${printer.color}, Brand: ${printer.brand}, Stock: ${printer.stock}, Working: ${printer.working}, Faulty: ${printer.faulty}, In Use: ${printer.inUse}`;
        printerList.appendChild(item);
    });
}
renderPrinters();

// Populate cartridge list
const cartridgeList = document.getElementById('cartridges');
function renderCartridges() {
    cartridgeList.innerHTML = "";
    cartridges.forEach(cartridge => {
        const item = document.createElement('li');
        item.textContent = `Model: ${cartridge.model}, Color: ${cartridge.color}, Brand: ${cartridge.brand}, Stock: ${cartridge.stock}, In Printer: ${cartridge.inPrinter}, Damaged: ${cartridge.damaged}, In Stock: ${cartridge.inStock}`;
        cartridgeList.appendChild(item);
    });
}
renderCartridges();

// Form submission handling
const form = document.getElementById('add-item-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const itemType = document.getElementById('item-type').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const brand = document.getElementById('brand').value;
    const stock = parseInt(document.getElementById('stock').value);
    const working = parseInt(document.getElementById('working').value);
    const faulty = parseInt(document.getElementById('faulty').value);
    const inUse = parseInt(document.getElementById('inUse').value);

    if (itemType === 'printer') {
        printers.push({ model, color, brand, stock, working, faulty, inUse });
        window.localStorage.setItem('printers', JSON.stringify(printers));
        renderPrinters();
    } else if (itemType === 'cartridge') {
        cartridges.push({ model, color, brand, stock, inPrinter: 0, damaged: 0, inStock: stock });
        renderCartridges();
    }

    form.reset();
});