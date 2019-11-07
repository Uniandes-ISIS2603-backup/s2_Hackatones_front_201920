import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LugarService } from "../lugar.service";
import { Lugar } from "../lugar";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-lugar-create",
  templateUrl: "./lugar-create.component.html"
})
export class LugarCreateComponent implements OnInit {
  lugarForm: FormGroup;

  lugares : Lugar[];

  constructor(
    private toastr: ToastrService,
    private lugarService: LugarService,
    private formBuilder: FormBuilder
  ) {
    this.lugarForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      ciudad: ["", Validators.required],
      direccion: ["", Validators.required]
    });
  }

  createLugar(newLugar: Lugar) {
    // Process checkout data here
    console.warn("Your order has been submitted", newLugar);
    this.showSuccess();
    this.lugarService.createLugar(newLugar).subscribe(lugar => {
      this.lugares.push(lugar);
    });
    this.lugarForm.reset();
  }

   showSuccess() {
    for (let i = 0; i < this.lugares.length; i++){
      console.log(this.lugares[i].id+' '+this.lugares[i].nombre+' '+this.lugares[i].id);
    }
    this.toastr.success("Lugar", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }

   ngOnInit() {
    this.lugarService 
      .getLugares()
      .subscribe(lugares => (this.lugares = lugares));
  }
}
