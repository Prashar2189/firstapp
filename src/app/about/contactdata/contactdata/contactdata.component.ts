import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';


                               

@Component({
  selector: 'app-contactdata',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contactdata.component.html',
  styleUrl: './contactdata.component.css'
})
export class ContactdataComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  emailid2 = "contact@appsimity.com"
  


  contactData = { name: '', email: '', project: '', message: '' };
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  submitForm() {
    // ✅ Prevent submission if fields are empty
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) {
      this.errorMessage = "All fields are required!";
      return;
    }
  
    this.errorMessage = ""; // Clear previous errors
  
    this.contactService.sendContact(this.contactData).subscribe(
      response => {
        this.errorMessage = "Data submitted successfully!";
        this.contactData = { name: '', email: '', project: '', message: '' }; // ✅ Reset form after submission
      },
      error => {
        console.error("Error:", error);
        this.errorMessage = error.error?.error || "Error submitting data.";
      }
    );
  }
}
