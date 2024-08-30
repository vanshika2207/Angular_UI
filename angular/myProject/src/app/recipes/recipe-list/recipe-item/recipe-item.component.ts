import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipes: Recipe;
  @Output() emitRecipe = new EventEmitter();
  onSelectRecipe() {
    this.emitRecipe.emit(this.recipes);
  }
}
