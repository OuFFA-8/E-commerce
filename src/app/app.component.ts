import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private FlowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite(flowbite => {
    });
  }
}

