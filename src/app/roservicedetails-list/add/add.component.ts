import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoService } from '../../service/ro-service';
// import { Roser }

@Component({
  selector: 'app-roservicedetails',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  providers: [RoService]
})

export class RoservicedetailsComponent {

  roSericeForm: FormGroup;

  constructor(
    private dailyWorkService: RoService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

    // Initialize the form group with form controls and validators
    this.roSericeForm = this.formBuilder.group({
      isNewCustomer: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      customerMobileNumber: ['', [Validators.required]],
      customerArea: ['', [Validators.required]],
      customerAddress: [''],
      machineModelValue: ['', [Validators.required]],
      materialPrice: ['', [Validators.required]],
      regularRetailPrice: [''],
      deliveredPrice: ['', [Validators.required]],
      profit: [''],
      isNewMachineOrder: ['', [Validators.required]],
      isWarrentyCovers: ['', [Validators.required]],
      numberOfWarrentyDays: ['', [Validators.required]],
      serviceDetails: ['', [Validators.required]],
      serviceDate: ['', [Validators.required]],
    });
  }

  onSubmit() {

    if (this.roSericeForm.valid) {

      const formValues = this.roSericeForm.value;

      let payload = {

        isNewCustomer: formValues.isNewCustomer == "yes" ? true : false,
        customerName: formValues.customerName,
        customerMobileNumber: formValues.customerMobileNumber,
        customerArea: formValues.customerArea,
        customerAddress: formValues.customerAddress,
        machineModelCode: formValues.machineModelValue,
        machineModelValue: formValues.machineModelValue,
        materialPrice: formValues.materialPrice,
        regularRetailPrice: formValues.regularRetailPrice,
        deliveredPrice: formValues.deliveredPrice,
        profit: formValues.profit,
        isNewMachineOrder: formValues.isNewMachineOrder == "yes" ? true : false,
        isWarrentyCovers: formValues.isWarrentyCovers == "yes" ? true : false,
        numberOfWarrentyDays: formValues.numberOfWarrentyDays,
        serviceDetails: formValues.serviceDetails,
        serviceDate: new Date(formValues.serviceDate).toISOString().split('T')[0],

      }

      this.dailyWorkService.addServiceDetails(payload).subscribe(res => {

        if (res != null) {
          if (res.errorCode == 200) {
            this.router.navigate(['/dashboard']);
          } else {
            console.log(res.userDisplayMesg);
          }
        } else {
          console.log('Something went wrong!');
        }

      });

    }

  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }

}
