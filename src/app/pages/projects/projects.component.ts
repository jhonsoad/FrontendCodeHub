import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
    selector: 'app-projects',
    imports: [HeaderComponent, FooterComponent, CarouselComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
