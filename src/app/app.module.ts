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
import { BannerComponent } from './banner/banner.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { VolumeButtonComponent } from './banner/volume-button/volume-button.component';
import { KnobComponent } from './banner/volume-button/knob/knob.component';
import { DashesComponent } from './banner/volume-button/dashes/dashes.component';
import { AudioControlsComponent } from './banner/audio-controls/audio-controls.component';
import { CircularProgressComponent } from './banner/volume-button/circular-progress/circular-progress.component';
import { RotateDirectiveDirective } from './rotate-directive.directive';

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
    BannerComponent,
    SearchbarComponent,
    IconButtonComponent,
    VolumeButtonComponent,
    AudioControlsComponent,
    KnobComponent,
    DashesComponent,
    CircularProgressComponent,
    RotateDirectiveDirective
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
    .addSvgIcon('search', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/search.svg`) )
    .addSvgIcon('play', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/play.svg`) )
    .addSvgIcon('previous_song', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/previous_song.svg`) )
    .addSvgIcon('next_song', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/next_song.svg`) )
    .addSvgIcon('pause', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/pause.svg`) )
    .addSvgIcon('handle', this.sanitizer.bypassSecurityTrustResourceUrl(`${this.path}/handle.svg`) )
  }
 
}
