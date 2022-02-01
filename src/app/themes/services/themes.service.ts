import { Injectable } from "@angular/core";
import { blueTheme, darkTheme, grayTheme, greenTheme, pinkTheme, Theme, violetTheme, yellowTheme } from "../themes";

@Injectable({
    providedIn: "root"
})

export class ThemesService{
    private active: Theme = darkTheme;
    private availableThemes: Theme[] = [
        darkTheme, 
        greenTheme, 
        grayTheme, 
        violetTheme, 
        pinkTheme, 
        yellowTheme, 
        blueTheme
    ];

    hasSaveTheme(): Theme {
        let theme: Theme;
        if(sessionStorage.getItem('theme')){
            theme = JSON.parse(sessionStorage.getItem('theme') || "");
        }
        else{
            theme = darkTheme;
        } 
        return theme;
    }

    getAvailableThemes(): Theme[] {
        return this.availableThemes;
    }

    getActiveTheme(): Theme {
        return this.active;
    }

    setTheme(name: Theme): void {
        this._setActiveTheme(name);
    }

    _setActiveTheme(theme: Theme){
        this.active = theme;
        sessionStorage.setItem('theme', JSON.stringify(theme));

        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            )
        })
    }
}