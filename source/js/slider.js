const input = document.querySelector('.comparison__input')
const buttons = document.querySelectorAll('.comparison__btn')

console.log(buttons)

const comparison = document.querySelector('.comparison')

input.addEventListener('input', function(evt){
  const value = (100 - input.value)  + '%'
  comparison.style.setProperty('--comparison', value)
})

for(btn of buttons){
  btn.addEventListener('click', (evt) => {
    console.log(evt.target.dataset.value)
    const btnDataValue = evt.target.dataset.value
    if (btnDataValue > 0)
    {
      comparison.style.setProperty('--psevdo-left', '0')
    } else {
      comparison.style.setProperty('--psevdo-left', '35px')
    }
    comparison.style.setProperty('--comparison', btnDataValue + '%')
    input.value = (100 - btnDataValue)

  })
}
