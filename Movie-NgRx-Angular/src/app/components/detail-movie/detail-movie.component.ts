import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesToolsModule } from 'src/app/modules/modules-tools/modules-tools.module';
import { MovieService } from 'src/app/services/movie.service';
import { ApiResponse } from 'src/app/interface/apiResponse-movie';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/interface/baseData-movie';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-detail-movie',
  standalone: true,
  imports: [CommonModule, ModulesToolsModule],
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
  
})
export class DetailMovieComponent implements OnInit{

  movie$!: Observable<Movies>;

  constructor(private _movieService: MovieService, private _route: ActivatedRoute, private _location: Location) { }
  
  
  ngOnInit(): void {
    this.getMovieById()
  };

  getMovieById(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.movie$ = this._movieService.getMovieById(id);

  };

}
