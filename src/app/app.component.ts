import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CopyrightFooterComponent } from "./layout/ui/footer/copyright-footer/copyright-footer.component";

@Component({
  selector: 'ja-park-root',
  standalone: true,
  imports: [RouterOutlet, CopyrightFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ja-park';
}
