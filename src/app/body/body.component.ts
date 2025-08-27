import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {


  //Array Of Colors 
  colors: String[]= ['red','blue','green','yellow','charteuse','pink']
  
  
  currentColorIndex=0;
  
  changeNameColor(){
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  }
  get currentColor(): String {
    return this.colors
    [this.currentColorIndex]
  } 

  profile = {
    name: "Bryan Moreno",
    title: 'no.1 jockey',
    about: 'best horse rider',
    skills: ['Rides good horse' , 'win triple tiara' , 'triple crown' , 'URA finale'],
    experience: [
      {
        role: 'Horse Jockey',
        company: 'Trachen Academy',
        period: '2024-Present',
        description: 'Toreina-san',

      },
      { 
        role: 'Horse Trainer',
        company: 'Trachen Academy',
        period: '2024-Present',
        description: 'Toreina-san',
      },
    ], 
    education: {
      degree: 'Bachelor in Computer Science',
      school: 'University Of Baguio',
      year: '2027',
    },
    contact: {
      email: '20244362@s.ubaguio.edu',
      phone: '2024436223342',
      location: 'Trachen, Baguio',
    }
  }
}
