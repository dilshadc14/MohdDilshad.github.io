var foo = function(obj, next){ 
  console.log("in foo", obj)
  obj["foo"] = true
  next()
}

var bar = function(obj, next){
  console.log("in bar", obj)
  obj["bar"] = true
  next()
}

var baz = function(obj, next){
  console.log("in baz", obj)
  obj["baz"] = true
  next()
}

var handle = function(obj, stack){
  var index = 0;

  function next(){
    var layer = stack[index++]
    if(!layer){
      console.log(obj, "done")
      return
    }
    layer(obj, next)
  }
  next()
}

handle({}, [foo, bar, baz])
