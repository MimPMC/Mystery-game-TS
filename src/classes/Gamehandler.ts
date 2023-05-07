import { playMainMenuScene } from "../scene functions/MainMenuScene";
import { playChapter1, playChapter2 } from "../scene functions/playChapter1";

export default class GameHandler {
    activeScene: string;
    isMusicPlaying: boolean;
    points: number;
    constructor() {
        this.isMusicPlaying = false
        this.points = 0
        this.activeScene = "mainmenu"
    }

    public renderActiveScene(scene:string) {
        this.activeScene = scene 
        switch(this.activeScene) {
            case "mainmenu":
                playMainMenuScene()
   
            break;
            case "library":
                //start library story scene
                
            break
            case "story":
                //start background story scene
            break
            case "chapter1":
                playChapter1()
            break
            case "chapter2":
                playChapter2()
            break
            default:
                //start main menu music
        }    
    }
    public getPoints() {
        return this.points
    }
    public setPoints(operator: string, number: number) {
        if (operator === "+") {
          this.points += number;
        } else if (operator === "-") {
          this.points -= number;
        }
      }

}
