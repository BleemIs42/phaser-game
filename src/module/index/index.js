import 'pixi'
import 'p2'
import { Game } from 'phaser'

import * as states from '../../components/index/states';

const width = 375
const height = 667

class App extends Game {
  constructor() {
    super(width, height, Phaser.AUTO, 'app', null)

    Object.keys(states).forEach(state => this.state.add(state, states[state]))
    
    debugger
    this.state.start('Boot')
  }
}

window.game = new App()