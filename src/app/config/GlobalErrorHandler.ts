import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()

export class GlobalErrorGandler implements ErrorHandler {

  constructor() { }

  handleError(error) {

    // your custom error handling logic

    console.log('---------------------------'+error['status'])

  }

}