import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuitarsService } from '../../services/guitars.service';

@Component({
  selector: 'app-detail-guitar',
  templateUrl: './detail-guitar.component.html',
  styleUrls: ['./detail-guitar.component.css']
})
export class DetailGuitarComponent {
  guitar: any;
  id: any;


  constructor(private activatedRouter: ActivatedRoute, private service: GuitarsService ) { 
    this.activatedRouter.params.subscribe( data => {
      this.id = data['id'];
      this.service.getGuitar(this.id).subscribe( resp => {
        let aux:any = resp;
        this.guitar = aux.msg;
      })
    })
  }

  ngOnInit(): void {
  }
}
