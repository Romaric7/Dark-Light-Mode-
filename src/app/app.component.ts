import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DarkMode';
  isDarkMode: boolean | null = null;
  showFiller = false;

  constructor(private themeService: ThemeService, public dialog: MatDialog){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog fermée`);
    });
  }

  ngOnInit(){

  }

  ToggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();
    /*
    if(this.isDarkMode){
      this.themeService.update('light-mode');
    }else {
      this.themeService.update('dark-mode');
    }*/
    this.isDarkMode ? this.themeService.update('light-mode') : this.themeService.update('dark-mode');
  }
}
