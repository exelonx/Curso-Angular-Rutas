import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = '';
  
  dbouncer: Subject<string> = new Subject();
  
  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(event: any) {
    this.dbouncer.next(this.termino)

  }
  
  ngOnInit(): void {
    this.dbouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
      this.onDebounce.emit(valor)
    } )
  }
}
