import { ActivatedRoute } from '@angular/router';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId = signal('');

  constructor(private route: ActivatedRoute) {
    this.userId.set(this.route.snapshot.paramMap.get('id') || '');
  }
}
