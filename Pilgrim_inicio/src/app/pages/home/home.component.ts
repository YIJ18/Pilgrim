import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  selector: 'app-home',
  template: `
    <mat-toolbar style="background-color: #3e2c23; color: #fff;">
      <span>Bienvenido a Pilgram</span>
      <button mat-flat-button (click)="logOut()">Log out</button>
    </mat-toolbar>
    <div class="page-container">
      <!-- Aquí va el contenido de la página -->
    </div>
  `,
  styles: [
    `
      .page-container {
        background-color: #f4ede8; /* Fondo crema */
        min-height: 100vh;
        color: #4c2215; /* Color de texto */
      }
      mat-toolbar {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export default class HomeComponent {
  private _router = inject(Router);
  private authservice = inject(AuthService);

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/log-in');
    } catch (error) {
      console.log(error);
    }
  }
}
