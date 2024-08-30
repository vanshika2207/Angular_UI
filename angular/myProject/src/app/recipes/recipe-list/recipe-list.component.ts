import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeEmitted = new EventEmitter<Recipe>();
  newR: Recipe;
  recipes: Recipe[] = [
    new Recipe(
      'Three Chocolate pastry',
      'A classic and elegant pastry which has an insert of a white chocolate and walnut brownie, hazelnut chunks encased in a silky whipped ganache and decorated with swirls of milk and dark chocolate ganache , rested on a cocoa shortbread decorated with caramelised cocoa nibs and chocolate thins .',
      'https://thecococompany.com/cdn/shop/products/Threechcolates_1024x1024.jpg?v=1645452701'
    ),
    new Recipe(
      'Hazelnut Pastry',
      'A flavourful , sweet , soft and crunchy texture where hazelnut is a dominant flavour. Made up internally with two intricate layers consisting of hazelnut gianduja cremeaux and hazelnut praline creamaux encased in a crunchy milk chocolate coating with chocolate caramel whipped ganache ribbons and a dark chocolate stick .',
      'https://thecococompany.com/cdn/shop/files/hazelnutpastry_2_1024x1024.jpg?v=1689344299'
    ),
    new Recipe(
      'Eclairs Assorted Box',
      'A heavenly choux pastry filled with velvety chocolate cream, topped with a glossy chocolate glaze and a delicate chocolate shard.',
      'https://thecococompany.com/cdn/shop/files/eclairbox-2_1024x1024.jpg?v=1712838210'
    ),
  ];
  emitRecipe(value) {
    this.newR = value;
    // console.log(this.newR);
  }
  emit() {
    this.recipeEmitted.emit(this.newR);
  }
}
