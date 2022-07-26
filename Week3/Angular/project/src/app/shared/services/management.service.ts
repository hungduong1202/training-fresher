// a-service

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class ManagementService {
  constructor() {}

  remove(items: any[], key: string, value: string) {
    return items.filter((ele) => ele[key] !== value);
  }

  edit(form: NgForm, value: any) {
    form.setValue(value);
    form.form.markAsPristine();
  }
}
