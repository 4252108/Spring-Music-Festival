const submitBtn = document.querySelector('#submit')
// ローカルストレージから入力内容を取得
const formData = localStorage.getItem('smf-contact')
const jsonObject = JSON.parse(formData)
console.log(jsonObject)
// 入力内容を保存
Object.keys(jsonObject).forEach(key => {
    document.getElementById(key).innerText = jsonObject[key]
})
// 送信ボタンが押された時
submitBtn.addEventListener('click', () => {
    // ローカルストレージからデータを削除
    localStorage.removeItem('smf-contact')
})