import { Component } from '@angular/core';
import { CarouselComponent } from "../components/carousel/carousel.component";
import { HomeComponent } from "../pages/home/home.component";

@Component({
    selector: 'app-integration',
    standalone: true,
    templateUrl: './integration.component.html',
    styleUrls: ['./integration.component.scss'],
    imports: [CarouselComponent, HomeComponent]
})
export class IntegrationComponent {
  
}
