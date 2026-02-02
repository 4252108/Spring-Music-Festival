const toggleBtns = document.querySelectorAll('.toggle-btn')
const toggleTables = document.querySelectorAll('.timetable')
const toggleBtn1 = document.querySelector('#toggle-btn-1')
const toggleBtn2 = document.querySelector('#toggle-btn-2')

toggleBtns.forEach(btn => btn.addEventListener('click', (event) => {
    // すべてのボタンのactiveを消して、押されたボタンをactiveにする
    toggleBtns.forEach(item => item.classList.remove('active'))
    const currentBtn = event.currentTarget
    currentBtn.classList.add('active')
    // すべてのテーブルを非表示
    toggleTables.forEach(item => item.style.display = 'none')
    // dataset.targetとidと一致するテーブルを表示
    document.getElementById(currentBtn.dataset.target).style.display = 'table'
}))
