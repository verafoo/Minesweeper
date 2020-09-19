document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const flagsLeft = document.querySelector('#flags-left')
    const result = document.querySelector('#result')
    let width = 10
    let bombAmount = 20
    let flags = 0
    let squares = []
    let isGameOver = false
},
    //方块
    function createBoard() {
        flagsLeft.innerHTML = bombAmount
    }
    //随机炸弹
    const bombsArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount).fill('valid')
    const gameArray = emptyArray.concat(bombsArray)
    const shuffledArray = gameArray.sort(() => Math.random() -0.5)

    for(let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.classList.add(shuffledArray[i])
      grid.appendChild(square)
      squares.push(square)

      //点击左键
      square.addEventListener('click', function(e) {
        click(square)
      })

      //点击右键
      square.oncontextmenu = function(e) {
        e.preventDefault()
        addFlag(square)
      }
    }

    //添加数字
      for (let i = 0; i < squares.length; i++) {
          let total = 0
          const isLeftEdge = (i % width === 0)
          const isRightEdge = (i % width === width - 1)
      }