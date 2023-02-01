import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GuitarsService } from '../../services/guitars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-guitar',
  templateUrl: './new-guitar.component.html',
  styleUrls: ['./new-guitar.component.css']
})
export class NewGuitarComponent implements OnInit{

  forma: FormGroup;

  constructor(private fb: FormBuilder, private guitarService: GuitarsService, private router:ActivatedRoute, private _router:Router) { 
    this.forma = this.fb.group({
      name:        ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      img:         ['', [Validators.required]],
    })
  }

  ngOnInit(): void {}

  guardar(){
    console.log("Se está guardando");
    this.createGuitar();
  }

  createGuitar(){
    let obj = {
      name: this.forma.get('name')?.value,
      description: this.forma.get('description')?.value,
      img: this.forma.get('img')?.value
    }

    this.guitarService.saveGuitar(obj).subscribe(resp =>{
      console.log(resp)
      this._router.navigate(['/guitars']);
    });
  }
}
