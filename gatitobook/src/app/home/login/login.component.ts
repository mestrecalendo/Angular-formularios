import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = "";
  senha: string = "";

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void { }

  login() {
    this.authService.autentica(this.usuario, this.senha).subscribe({
      complete: () => { },
      error: () => { }
    }
    )
  }
}
