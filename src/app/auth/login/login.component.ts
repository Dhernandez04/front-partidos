import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    
    username: ['', Validators.required],
    password: ['', Validators.required],

    
  });
  constructor(private router:Router ,private fb:FormBuilder,private usuarioService:UsuarioService) { }


  ngOnInit(): void {
  }

  login() {
 
    this.usuarioService.login(this.loginForm.value).subscribe((resp) => {
    
      
      this.router.navigateByUrl('/lista')
    }, (err => {
      
      
     alert('error'+err.error.msg)
     }))    
  }
}
