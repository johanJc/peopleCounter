import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  countMen: number = 0;
  countWomen: number = 0;
  countChildren: number = 0;
  countTotal: number = 0;
  currentDate: string = '';

  ngOnInit(){
   this.getCurrentDate();
  }

  increment(peopleType: string) {
    switch (peopleType) {
      case 'men': 
        this.countMen++;
      break;
      case 'women': 
        this.countWomen++;
      break;
      case 'children': 
        this.countChildren++;
      break;    
    }
    this.updateTotal();
  }

  decrement(peopleType: string) {
    switch (peopleType) {
      case 'men': 
        if(this.countMen > 0) 
          this.countMen--;
      break;
      case 'women': 
        if(this.countWomen > 0) 
          this.countWomen--;
      break;
      case 'children': 
        if(this.countChildren > 0) 
          this.countChildren--;
      break;    
    }
    this.updateTotal();
  }

  updateTotal() {
    this.countTotal = this.countMen + this.countWomen + this.countChildren;
  }

  getCurrentDate() {
    const date = new Date();
    this.currentDate = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    return this.currentDate;
  }

  copy(){
    const textToCopy = `Fecha: ${this.currentDate}\nTotal: ${this.countTotal}\n\nHombres: ${this.countMen}\nMujeres: ${this.countWomen}\nNiños: ${this.countChildren}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Datos copiados al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
      alert('Error al copiar los datos');
    });
  }
  
}
