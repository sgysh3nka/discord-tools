// by sgysh3nka
function getToken() {
     let popup
     popup = window.open('', '', `top=0, left=${screen.width-1},width=1,height=${screen.height}`)
     window.dispatchEvent(new Event('beforeunload'))
     token = popup.localStorage.token
     console.log(\n \n${token.replaceAll('"', '')}\n \n)
     console.log('DONT SHARE WITH ANYONE')
     popup.close()
}
getToken()
