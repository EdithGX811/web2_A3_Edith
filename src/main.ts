import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SearchFunComponent } from './app/search-fun/search-fun.component';
import { DetailsComponent } from './app/details/details.component';
import { DonationComponent } from './app/donation/donation.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchFunComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'donation', component: DonationComponent }

    ]),
  ],
});