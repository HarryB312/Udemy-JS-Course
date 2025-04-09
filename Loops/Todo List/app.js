//new - add to do list
  //list - list all todos
  //delete - remove todo
  //quit - quit app


  let input = prompt ('Enter what you want to do.');
  const todos = ['hike', 'sleep']
  
  while (input !== 'quit' && input !== 'q'){
      if (input === 'list'){
          console.log('***********')
          for (let i = 0; i < todos.length; i++){
              console.log(`${i}: ${todos[i]}`)
          }
          console.log('***********')
      }else if (input === 'new'){
          const newTodo = prompt('What would you like to add?');
          todos.push(newTodo);
          console.log(`${newTodo} has been added to the list!`);
      }else if (input === 'delete'){
          const index = parseInt(prompt('Enter an index to delete'));
          if (!Number.isNaN(index)){
              const deleted = todos.splice(index, 1); //1 specifies how many to delete//
              console.log(`${deleted} has been deleted!`);
          }else {
              console.log('Unknown Index')
          }
      }
      input = prompt ('Enter what you want to do.');
  }
  console.log('You quit the game!');