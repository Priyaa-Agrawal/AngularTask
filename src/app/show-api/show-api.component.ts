import { Component, ViewChild, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ServiceApiService } from '../service-api.service'
import { ServiceApi1Service } from '../service-api1.service'

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { showData } from '../sampleData';
// import {HttpClient} from '@angular/common/http';
// import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.css']
})

export class ShowApiComponent implements OnInit{

  public sampleData= [];
  ELEMENT_DATA: showData[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];
  
  dataSource=new MatTableDataSource<showData>(this.ELEMENT_DATA);
  
  
  constructor(private _sampleservice : ServiceApiService, private _sampleservice1 : ServiceApi1Service, ) {
  
  }
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator | undefined;
  
  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // this.getData();
    this.getData1();
  }

  

  
  
  getData(){
    this._sampleservice.getUser().subscribe((Response)=>
    {
      
      this.dataSource.data=Response.data as showData[];
      // console.log(this.sampleData) 
    },
    );
  }


  getData1(){
    forkJoin([this._sampleservice.getUser(),this._sampleservice1.getUser1()])
    .subscribe(([Response1,Response2])=>{
        console.log(Response1,Response2);
        if(Response1 && Response2){
          //hideloader();
        }

        // this.sample=Response1.data;
        // this.sample=this.sample.concat(Response2.data);

        this.dataSource.data=Response1.data as showData[];
        this.dataSource.data=this.dataSource.data.concat(Response2.data as showData[]);
        console.log(this.dataSource.data[0].first_name)
    });

    // this._sampleservice1.getUser1().subscribe((Response)=>
    // {
    //   // this.sampleData = Response.data;
    //   this.dataSource.data=Response.data as showData[];
    //   // console.log(this.sampleData) 
    // },
    // );
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

























// export class ShowApiComponent implements OnInit {

//   public sampleData:string[] = [];
//   public searchData:string[] = [];
//   constructor(private _sampleservice : ServiceApiService){ 
      
//   }
  
//   searchValue: string = '';
//   ngOnInit(){
//     this.getData();
//     // this.searchUser();
//     // console.log('data56: '+this.sampleData)
//   }
  
//   getData(){
//     this._sampleservice.getUser().subscribe((Response)=>
//     {
//       if(Response){
//         hideloader();
//       }
//       this.sampleData = Response.data;
//       // console.log(this.sampleData)
      
//     },
//     );
    
//     function hideloader(){
//       document.getElementById('loading').style.display = 'none' ;
//     }
//   }
  
//   searchUser(){
//     console.log('hello')
//     // console.log('search:  '+this.searchValue);
//     this.searchData = []
//     this.searchData = this.sampleData;
//     let filterUser: string[] = [] ;
//     if( this.searchValue && this.searchValue != ''){
//       // console.log('if:  '+this.searchValue);
//       // console.log('data1: '+this.sampleData)
//       for(let user of this.sampleData){
//         // console.log('data2: '+user)
//         if(user.first_name.toLowerCase().search(this.searchValue.toLowerCase())!=-1 ||
//         user.last_name.toLowerCase().search(this.searchValue.toLowerCase())!=-1){
//           // console.log('if...123:  '+this.searchValue);
//           filterUser.push(user)
//         }
//       }
//       this.sampleData = filterUser.slice();
//       // console.log('data: '+filterUser)
      
//     }
//       else{
//         this.getData();
//       }
    
//   }
// }
  
  // ngOnInit(): void {
  //   this.http.get('https://reqres.in/api/users?page=1') 
  //   .subscribe(Response => { 
  
  //     // If response comes hideloader() function is called 
  //     // to hide that loader  
  //     if(Response){   
  //       // hideloader(); 
  //       console.log('Succesful!')
  //     } 
  //     console.log(Response) 
  //     this.li=Response; 
  //     this.lis=this.li.data; 
  //     console.log(this.li.data[0].email);
  //     console.log(this.lis);
  //   }); 
  //   // function hideloader(){ 
  //   //   document.getElementById('loading').style.display = 'none' ;} 
  // }} 
  

