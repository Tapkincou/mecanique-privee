import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';
import { CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragNDropService {

  // All dropList used by the DragNDropService.
  private dropLists: CdkDropList[];
  private dropListsIDs: string[];

/*  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addCdkDropList() {
    const factory = this.factoryResolver
                        .resolveComponentFactory(CdkDropList);
    const component = factory
      .create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }


  public addDropList(dropList: CdkDropList): void {
    this.dropListsIDs.push(dropList.id);
    this.dropLists.push(dropList);
  }
*/

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
   *
   *
   */
  public attachDropList(dropList: CdkDropList, dropListToAttach: CdkDropList) {
      dropList.connectedTo = dropListToAttach;
  }

  /**
   *
   *
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
