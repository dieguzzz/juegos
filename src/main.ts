import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ApiService } from './app/service/api.service';
import { inject } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => {
  const apiService = inject(ApiService);
  apiService.getGames().subscribe(data => {
    console.log(data);
    const gameListElement = document.querySelector('.gameList ul');
    if (gameListElement) {
      gameListElement.innerHTML = data.map((game: any) => `
        <li>
          <div class="gameInfo">
            <img src="${game.thumbnail}" alt="${game.title} image" class="gameImage">
            <p class="gameTitle">${game.title}</p>
            <p>Plataforma: ${game.platform}</p>
            <p>Género: ${game.genre}</p>
          </div>
        </li>
      `).join('');
    }
  });
});
