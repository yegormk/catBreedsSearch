import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';

import {PageEvent} from '@angular/material/paginator';

import {catGalleryState} from '../store/cats.state';
import * as CatGalleryActions from '../store/cats.actions';
import {selectBreeds, selectCats} from '../store/cats.selectors';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private store: Store<catGalleryState>) { }

  searchForm!: FormGroup;

  imagesData$ = this.store.pipe(select(selectCats));
  listOfBreeds$ = this.store.pipe(select(selectBreeds));

  pagination = {
    limit: 10,
    startIndex: 0,
    endIndex: 5
  }

  loadImages(): void {
    this.pagination.limit = this.searchForm.value.quantity;
    this.store.dispatch(
      CatGalleryActions.loadImages({
        limit: this.searchForm.value.quantity,
        breed: this.searchForm.value.breed,
      })
    );
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pagination.limit) {
      endIndex = this.pagination.limit;
    }
    this.pagination.startIndex = startIndex;
    this.pagination.endIndex = endIndex;
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      breed: new FormControl('all', [
        Validators.required,
      ]),
      quantity: new FormControl('10', [
        Validators.required,
      ])
    });
    this.loadImages();
    this.store.dispatch(CatGalleryActions.loadListOfBreeds());
  }

  onSubmit() {
    this.loadImages();
  }
}
