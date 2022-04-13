import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  testData: any[] = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
  ];

  todo: [];

  done: [];

  dummy: any = {};

  ngOnInit() {
    this.constructArray();
  }

  constructArray() {
    const numberOfColumns: number = Math.ceil(this.testData.length / 4);

    for (let index = 0; index < numberOfColumns; index++) {
      this.dummy[`col${index}`] = this.testData.slice(
        index * 4,
        4 * (index + 1)
      );
    }
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.testData = [];
    Object.entries(this.dummy).forEach(([key, value]) => {
      this.testData.push(...this.dummy[key]);
    });
    this.constructArray();
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
