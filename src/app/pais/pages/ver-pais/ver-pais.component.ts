import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({idCountry}) => this.paisService.getPaisPorAlpha(idCountry))
      )
    .subscribe( resp =>{
      console.log(resp);
    })

    // this.activatedRoute.params
    //   .subscribe(({ idCountry }) => {
    //     console.log(idCountry);
    //     this.paisService.getPaisPorAlpha(idCountry)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })


  }

}
