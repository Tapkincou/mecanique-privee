import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';
import { CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragNDropService {

  // All dropList used by the DragNDropService.
  private dropLists: CdkDropList[];
  private dropListsIDs: string[];


  /**
   * Attach every DropLists to
   *
   */
  public attachAllDropLists() { // dropList: CdkDropList, dropListToAttach: CdkDropList
    this.dropLists.forEach(dropList => {
      dropList.connectedTo = this.dropListsIDs;
    });

  }

  /**
   * Link a drop list to another one.
   */
  public attachDropList(dropList: CdkDropList, dropListToAttach: CdkDropList) {
      dropList.connectedTo = dropListToAttach;
  }

  /**
   * Link two drop lists together.
   */
  public attachDropListOnBothSide(dropList: CdkDropList, dropListToAttach: CdkDropList) {
    this.attachDropList(dropList, dropListToAttach);
    this.attachDropList(dropListToAttach, dropList);
  }
  /**
   * Call this function to process the drop of a dragged item from one place to another.
   */
  public drop<T>(event: CdkDragDrop<T[]>) {
      console.log(event.container.data);

      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }

  /**
   * Call this function to process a drop that copy the dragged item instead of just move it up.
   */
    public dropWithoutRemove<T>(event: CdkDragDrop<T[]>) {
      console.log(event.container.data);

      // If item dragged on the same list.
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        copyArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }

}
