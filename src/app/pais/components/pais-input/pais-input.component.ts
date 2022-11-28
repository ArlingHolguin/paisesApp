import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  //observable rxjs
  debouncer: Subject<string> = new Subject();


  termino: string = '';
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      // console.log('debouncer:', valor);
      this.onDebounce.emit(valor);
    })
  }


  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any){
    this.debouncer.next(this.termino);
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);
  }




}
