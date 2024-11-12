import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css',
})
export class UserSingleComponent implements OnInit, OnDestroy {
  // @Input() user: string = '';
  @Input() index: number = -1;
  // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  tempName: string = '';
  textColor: any = {
    color: 'black',
  };
  colorchangedSubscription: Subscription = new Subscription();

  editMode: boolean = false;
  toggleEdit(editmode: boolean, tempName: string) {
    this.editMode = editmode;
    this.tempName = tempName;
  }

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.colorchangedSubscription = this.userService.colorHasChanged.subscribe(
      (color: string) => {
        this.textColor.color = color;
      }
    );
  }

  ngOnDestroy(): void {
    this.colorchangedSubscription.unsubscribe();
  }
}
