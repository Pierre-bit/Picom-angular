import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CookieService]
})
export class AdminComponent implements OnInit {


  cookies = inject(CookieService);

  constructor(private loginService: LoginService,
    private router: Router) { }

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
