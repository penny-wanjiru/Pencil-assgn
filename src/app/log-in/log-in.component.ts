import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [AuthService]
})

export class LogInComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
