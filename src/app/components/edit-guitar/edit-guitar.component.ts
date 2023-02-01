import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GuitarsService } from '../../services/guitars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-guitar',
  templateUrl: './edit-guitar.component.html',
  styleUrls: ['./edit-guitar.component.css']
})
export class EditGuitarComponent implements OnInit{

  forma: FormGroup;
  id:any;

  constructor(private fb: FormBuilder, private guitarService: GuitarsService, private router:ActivatedRoute, private _router:Router) { 
    this.forma = this.fb.group({
      name:        ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      img:         ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(paramsId => {
      this.id = paramsId['id'];
    })

    this.guitarService.getGuitar(this.id).subscribe(resp => {
      console.log(resp)
      this.changeForm(resp);
    });
  }

  guardar(){
    console.log("Se está guardando");
    let obj = {
      id: this.id,
      name: this.forma.get('name')?.value,
      description: this.forma.get('description')?.value,
      img: this.forma.get('img')?.value
    }
    console.log(obj);

    this.guitarService.updateGuitar(obj).subscribe(resp =>{
      console.log(resp)
      this._router.navigate(['/guitars']);
    });
  }

  changeForm(data:any){
    let mydata = data.msg;
    this.forma = this.fb.group({
      name:        [mydata.name],
      description: [mydata.description],
      img:         [mydata.img]
    })
  }
}
