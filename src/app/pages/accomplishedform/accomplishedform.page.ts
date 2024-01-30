import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomplishedform',
  templateUrl: './accomplishedform.page.html',
  styleUrls: ['./accomplishedform.page.scss'],
})
export class AccomplishedformPage{

  dummyData = [
    {fileName: "NaturalDisaster1.docx", imgSrc: "assets/acc.png"},
    {fileName: "NaturalDisaster3.docx", imgSrc: "assets/acc.png"},
  ];

}
