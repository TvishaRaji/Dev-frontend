import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
import axios from 'axios';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})export class ProfileComponent implements OnInit {
  productDetails: any;

  constructor( ) { }

  lis=[]

  ngOnInit() {
    // Retrieve the product details from the shared service
    // modified
    axios.get("http://13.232.222.16/data").then((res)=>{
      console.log(res.data)
      let l=res.data;
      
      for (let i =0; i<l.length;i++)
      {
        let v=l[i][0]
        console.log(v)
        // http://localhost:3000 => http://35.154.122.171/
        axios.get(`http://35.154.122.171/Users?Key=${v}`).then((res)=>{
        this.lis.push(res.data)
        })
      }
      console.log(this.lis)
    })

    
  }
}




// ...
