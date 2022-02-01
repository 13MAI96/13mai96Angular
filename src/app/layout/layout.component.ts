import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemesService } from '../themes/services/themes.service';
import { Theme } from '../themes/themes';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    themes: Theme[] = [];
    selectTheme: number = 0;
    theme: Theme;
    active: string = 'home';

  constructor(
    private themeService: ThemesService,
    private router: Router
  ) { 
    this.theme = this.themeService.hasSaveTheme();
    this.themes = this.themeService.getAvailableThemes();
  }

  ngOnInit(): void {
    this.themeService.setTheme(this.theme);
  }

  changeTheme(){
    this.selectTheme = this.selectTheme + 1;
    this.selectTheme = this.selectTheme >= this.themes.length? 0 : this.selectTheme;
    this.themeService.setTheme(this.themes[this.selectTheme]);
  }

  reload(){
    location.reload();
  }

  toAboutMe(){
    console.log(this.router);
    this.router.navigate(['/aboutMe']);
    this.active = 'aboutMe';
  }
  toHome(){
    this.router.navigate(['/home']);
    this.active = 'home';
  }
  toProjects(){
    this.router.navigate(['/projects']);
    this.active = 'projects';
  }
}
