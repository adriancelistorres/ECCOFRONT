import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncentiveTriggerService {
  @Output() disparadorDNI:EventEmitter<any>=new EventEmitter();
}
