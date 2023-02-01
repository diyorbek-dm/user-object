const obj = {}

function object() {
  let userId = 0

  for (let i = 1; i <= 10; i++) {
    let userName = prompt('Your name:')
    let userAge = prompt('Your age:')
    userId++

    obj[i] = {
      id: userId,
      name: userName,
      age: userAge,
    }
  }

  console.log(obj)
}

object()