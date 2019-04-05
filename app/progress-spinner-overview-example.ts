import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

    this.httpClient.get<any>('http://dummy.restapiexample.com/api/v1/employees')
      .pipe(map((result) => result))
      .subscribe(
        success => {
          alert(1);
        },
        error => {
          console.error(error);
        }
      );
  }
}