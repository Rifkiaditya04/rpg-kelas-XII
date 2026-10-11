/**
 * Recipe Repository
 * Data access layer for mission recipes.
 */
const { loadRecipe } = require('../loaders/recipeLoader');

class RecipeRepository {
  constructor(baseDir = null) {
    this.baseDir = baseDir;
    this.cache = new Map(); // key: `${subject}:${filename}` -> Recipe Object
  }

  getRecipeKey(subject, filename) {
    return `${subject}:${filename}`;
  }

  getRecipe(subject, filename) {
    const key = this.getRecipeKey(subject, filename);
    if (!this.cache.has(key)) {
      const recipe = loadRecipe(subject, filename, this.baseDir);
      this.cache.set(key, recipe);
    }
    return this.cache.get(key);
  }

  clearCache() {
    this.cache.clear();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RecipeRepository };
} else if (typeof window !== 'undefined') {
  window.RPG_RecipeRepository = { RecipeRepository };
}
