import { Injectable } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragNDropService {

  constructor() { }

  // All dropList used by the DragNDropService.
  private dropLists: CdkDropList[];

  /**
   *Add a new Droplist into the service
   *
   * @returns {boolean}
   * @memberof DragNDropService
   */
  public createDropList(): boolean {
    return true;
  }

  /**
   *
   *
   * @param {CdkDropList} dropList
   * @param {CdkDropList} dropListToAttach
   * @memberof DragNDropService
   */
  public attachdropLists(dropList: CdkDropList, dropListToAttach: CdkDropList) {


  }

}
