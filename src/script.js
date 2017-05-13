$(document).ready(function(){
  console.info("Script loaded")

  var navbar = $("#navbar")
  var content = $("#content")
  var interactiveStart = $("#interactiveStart")
  navbar.hide()
  content.hide()

  $("#closeDialog").click(function(){
    closeDialog(navbar, content, interactiveStart)
  })

  $("#skip").click(function(){
    closeDialog(navbar, content, interactiveStart)
  })

  $("#submitName").click(function(){
    // $("input:")
  })

  $("#openDialog").click(function(){
    openDialog(navbar, content, interactiveStart)
  })
})

function submitName(name){
  menu.show()
  body.show()
  modal.hide()

  console.debug("Closing pane...")
}

function openDialog(menu, body, modal){
  menu.hide()
  body.hide()
  modal.show()

  console.debug("Opening pane...")
}

function closeDialog(menu, body, modal){
  menu.show()
  body.show()
  modal.hide()

  console.debug("Closing pane...")
}
