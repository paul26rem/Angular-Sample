import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

constructor() { }

  ngOnInit() {
    this.getData();
  }
  search:String="";
  data:any[];
  checkAll:boolean=false;

  coverCode="";
  section="";
  bulletNo="";
  sumInsured="";
  sortSe="";

  addData(){
    this.data.push(
      {
        checked:false,
        coverCode:this.coverCode,
        section: this.section,
        bulletNo:this.bulletNo,
        sumInsured: this.bulletNo,
        sortSe:this.sortSe
      }  
    );
    this.reset();
  }

  reset(){
    this.coverCode="";
    this.section="";
    this.bulletNo="";
    this.sumInsured="";
    this.sortSe="";
  }

  delete(){
    for (var i = this.data.length - 1; i >= 0; i--){
      if(this.data[i].checked){
        this.data.splice(i,1);
      }
    }
  }
/*replace with webservice*/
  getData(){
    this.data= [
      {
        checked:false,
        coverCode:"Contract Works",
        section: "I",
        bulletNo:1.1,
        sumInsured: "50,000,000.00",
        sortSe:10
      },
      {
        checked:false,
        coverCode:"Material Supplied",
        section: "I",
        bulletNo:1.2,
        sumInsured: "10,000,000.00",
        sortSe:20
      }
    ];

    for (var i = this.data.length - 1; i >= 0; i--) {
      if (!this.data[i].coverCode.toLowerCase().includes(this.search.toLowerCase()) ) {
        this.data.splice(i,1);
      }
    }
  }

  toggleAll(){
    for (var i = this.data.length - 1; i >= 0; i--) {
        this.data[i].checked=!this.checkAll;
    }
  }
}
