import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

export default function DownloadPdf() {

    let columns = ["ID", "Name", "Country"];
    let rows = [
        [1, "Shaw", "Tanzania"],
        [2, "Nelson", "Kazakhstan"],
        [3, "Garcia", "Madagascar"]
    ];

// Only pt supported (not mm or in)
let doc = new jsPDF('p', 'pt');
    doc.text("Inventory Detailed Report", 40, 30);
    
    
    doc.autoTable({
        addPageContent: function(data) {
            doc.text("Tech SAS", 40, 50);
        },
        margin: {top: 60},
    head: [['Name: Tech SAS', 'Direccion: Calle 123', 'NIT: 1287321', 'Telefono: 356-234-4332', 'Pais: Col'], ['Date', 'Item', 'Amount', 'Price']],
    foot:[[' ', 'Price total', '130000', '  ']],
    
    body: [
      ['13/23/2023', 'Laptop I5 core', '2', '1876552'],
      ['13/23/2023', 'GTX 4500 TI', '3', '9876552'],
      // ...
    ],
  })
  doc.save('table.pdf');
      
  }