import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css'],
  providers: [CookieService]
})
export class AnnonceComponent implements OnInit {

  cookies = inject(CookieService);
  annonces: Annonce[] = [];

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout().subscribe({
      next: () => {
        sessionStorage.removeItem('user');
        this.cookies.delete('JSESSIONID')
        window.location.reload();
      }
    });
  }

  home() {
    this.router.navigate(['/annonce'])
  }
}
