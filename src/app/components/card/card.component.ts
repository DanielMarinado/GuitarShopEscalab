import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Guitar } from '../guitars/guitars.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput: Guitar = {
    name: "",
    description: "",
    img: ""
  }
  @Input() indexInput: number = 0;
  @Output() selectGuitar: EventEmitter<number> = new EventEmitter();

  buyGuitar() {
    this.selectGuitar.emit(this.indexInput);
    console.log("Guitarra Comprada");
  }

  detailsGuitar( index: number) {
    this.router.navigate(['guitar', index]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
