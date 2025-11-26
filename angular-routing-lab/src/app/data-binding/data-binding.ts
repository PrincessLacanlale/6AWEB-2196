import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation
  studentName = "Princess Lacanlale"
  score = 95;

  //Property Binding
  imageUrl = "https://picsum.photos/200";
  isDisabled = true;

  //Attribute binding
  colSpanValue = 3;

  //Class binding
  isPassing = true;

  //Style binding
  boxColor = "puple";
  boxSize = "150px"

}
