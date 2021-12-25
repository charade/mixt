import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { AvatarComponent } from './avatar/avatar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuIconComponent } from './navbar/menu-icon/menu-icon.component';
import { MainComponent } from './main/main.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    AvatarComponent,
    HomeComponent,
    NavbarComponent,
    MenuIconComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  path = './assets/icons';

  constructor(private matIconRegistery : MatIconRegistry, private sanitizer : DomSanitizer ){

    this.matIconRegistery
    .addSvgIcon('equalizer', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/equalizer.svg`) )
    .addSvgIcon('favorites', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/favorites.svg`) )
    .addSvgIcon('home', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/home.svg`) )
    .addSvgIcon('log_out', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/log_out.svg`) )
    .addSvgIcon('mic', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/mic.svg`) )
    .addSvgIcon('playlist', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/playlist.svg`) )
    .addSvgIcon('settings', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/settings.svg`) )
  }
 
}
