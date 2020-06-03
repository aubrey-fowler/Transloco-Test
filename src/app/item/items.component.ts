import { Component, OnInit } from "@angular/core";

import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor(private translate: TranslocoService) { }

    ngOnInit(): void {
        console.log(' ItemsComponent ', this.translate.getActiveLang());
        console.log(' ItemsComponent 2 ', this.translate.getAvailableLangs());
    }

    switchLang(lang: string) {
        this.translate.setActiveLang(lang);
        console.log(' setActiveLang ', this.translate.getActiveLang());
    }

    useLanguage(language: string) {
        this.translate.setActiveLang(language);
        console.log(' setActiveLang ', this.translate.getActiveLang());
    }

    add() {
        console.log(' a ');
        this.translate.setTranslation({ Sitetitle : "bonjour"}, 'fr', { merge: true });
        console.log(' ItemsComponent ', this.translate.getActiveLang());
        console.log(' ItemsComponent 3 ', this.translate.getAvailableLangs());
    }

}
