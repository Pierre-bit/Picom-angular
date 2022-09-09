import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  
  constructor(
    private service: LoginService,
    private http: HttpClient ,
    private router: Router,
    public translateService: TranslateService
  ){
    translateService.addLangs(['en'])
    translateService.setDefaultLang('fr')
  }
  ngOnInit(): void {
    
  }
  title = 'Picom';

  logout() {
    this.http.post('http://localhost:8080/login', {}).subscribe(
      data => {this.router.navigateByUrl("/home");}
    );
  }

  translateSite(language: string)
  {
    this.translateService.use(language)
  }
}

