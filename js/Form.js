class Form{
    constructor(){

    }


    display(){
     var title = createElement('h2')
     title.html("Car Racing Game")
     title.position(800, 50)

     var input = createInput("Name")
     var button = createButton('Play')
     

     input.position(800, 160)
     button.position(800, 200)

     button.mousePressed(function(){
      input.hide()
      button.hide()

      var name = input.value()

      playerCount+=1
      player.update(name)
      player.updateCount(playerCount)

      var greeting = createElement('h3')

      greeting.html("hello" + name)
      greeting.position(800, 200)
     })
    }
}
