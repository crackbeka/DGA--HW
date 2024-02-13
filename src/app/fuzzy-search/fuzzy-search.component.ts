import { Component } from '@angular/core';

@Component({
  selector: 'app-fuzzy-search',
  templateUrl: './fuzzy-search.component.html',
})
export class FuzzySearchComponent {
  searchText: string = '';
  items: string[] = [
    'ქონება',
    'ქონების პრივატიზება',
    'ქონების გასხვისება',
    'საქონლის გასხვისება',
  ];
  searchResults: { item: string; percentage: number }[] = [];

  constructor() {}
  search(): void {
    if (!this.searchText) {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.items
      .map((item) => ({
        item,
        percentage: this.calculateMatchingPercentage(item, this.searchText),
      }))
      .filter((result) => result.percentage > 0)
      .sort((a, b) => b.percentage - a.percentage);
  }

  calculateMatchingPercentage(item: string, query: string): number {
    item = item.toLowerCase();
    query = query.toLowerCase();

    let matchCount = 0;
    let j = 0; // Index for the query
    for (let i = 0; i < item.length; i++) {
      if (item[i] === query[j]) {
        matchCount++;
        j++;
      }
    }

    return (matchCount / Math.max(query.length, item.length)) * 100;
  }
}
