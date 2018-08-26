import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
items=[];


newItem="";
pushItem=function()
{
	if(this.newItem!="")
	{
	this.items.push(this.newItem);
	this.newItem="";
	}
}

items1=[];
newItem1="";
pushItem1=function()
{
  if(this.newItem1!="")
  {
  this.items1.push(this.newItem1);
  this.newItem1="";
  }
}



removeItem=function(index,index1)
{
  this.items.splice(index,1);
  this.items1.splice(index1,1);

}


removeItem1=function(index1)
{
  this.items1.splice(index1,1);

}

  constructor() { }

  ngOnInit() {
  }

}
