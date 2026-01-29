const form = document.querySelector('#contact')
const resetBtn = document.querySelector('#reset')

// フォームの項目一覧
const formItemBox = ['type', 'name', 'email', 'phone', 'text']

// errorテキスト
const error = document.querySelectorAll('.error')

// ページ読み込み時に行う処理
const getFormData = () => {
    // ローカルストレージからformDataを取得
    const formData = localStorage.getItem('smf-contact')
    const jsonObject = JSON.parse(formData)
    // ローカルストレージにdataがあれば、フォームに埋め込む
    if (jsonObject) {
        Object.keys(jsonObject).map(item => document.getElementById(`form-${item}`).value = jsonObject[item])
    }
}

// Submitされた時
form.addEventListener('submit', (e) => {
    // Submit時のページの更新を止める
    e.preventDefault()
    // errorの中身をリセット
    error.forEach(item => item.innerHTML = '')
    // フォームの入力内容をjsonにする
    const formData = new FormData(form)
    const jsonObject = Object.fromEntries(formData.entries())
    // console.log(jsonObject)
    // 必須項目の入力確認
    let flg = true
    formItemBox.forEach(item => {
        // 必須項目のみ未入力チェック
        if (item !== 'phone' && jsonObject[item] == '') {
            // エラー文の表示
            document.querySelector(`#error-${item}`).innerHTML = "未入力です"
            flg = false
        }
    })
    // エラーがあれば、処理を終了
    if (!flg) return
    // ローカルストレージに入力内容を保存
    localStorage.setItem('smf-contact', JSON.stringify(jsonObject))
    window.location.href = '/contact-confirm.html'
})

resetBtn.addEventListener('click', () => {
    localStorage.removeItem('smf-contact')
})

getFormData()