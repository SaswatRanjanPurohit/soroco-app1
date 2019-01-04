import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  private top_schools_data: any[] = [
    {"school":"IIIT Bengaluru" , "applicant":52},
    {"school":"IIT Hyderabad","applicant":50},
    {"school":"IIIT Hyderabad","applicant":47},
    {"school":"IIT Chennai","applicant":46},
    {"school":"Harvard University","applicant":16},
    {"school":"MIT","applicant":12},
    {"school":"Carnegie Mellon","applicant":12},
    {"school":"LSE","applicant":11},
    {"school":"Columbia University","applicant":10}
  ];

  constructor() { }

  ngOnInit() {
  }

}
