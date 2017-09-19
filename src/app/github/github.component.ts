import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service/my-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  name='';
  username='';
  success=false;

  constructor(private _gitService: MyServiceService) {
    this.getHubs(this.username);
  }

  onSubmit(){
    this.getHubs(this.username);


  }

  getHubs(username) {
    this._gitService.retrieveGits((name) => {
        this.name = name;
    },  username);
  }

  ngOnInit() {
  }

}
