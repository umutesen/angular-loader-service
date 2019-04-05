import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: 'progress-spinner-overview-example.html'
})
export class ProgressSpinnerOverviewExample implements OnInit {
  showSpinner: boolean;

  constructor(private spinnerService: SpinnerService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.spinnerService.onVisibilityChange((value) => {
      this.showSpinner = value;
    });
  }

  doWork() {

    this.httpClient.get<any>('https://www.google.com').subscribe(
      success => {
        alert(1);
      },
      error => {
        console.error(error);
      }
    );
  }
}