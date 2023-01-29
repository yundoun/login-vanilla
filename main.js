const $loginSection = document.getElementsByClassName('login')[0]

const $loginTitle = document.createElement('h2')

$loginTitle.innerText = '로그인'

$loginSection.appendChild($loginTitle)


const newUl = document.createElement('ul')
const newLi = document.createElement('li')

newUl.appendChild(newLi) //ul태그에 li태그 추가

newLi.innerHTML = "<input type='text'placeholder='아이디' title='아이디입력'><input type='password' placeholder='비밀번호' title='비밀번호입력'><input type='checkbox' id='chk_id'><label for='chk_id'>아이디저장</label><button>로그인</button>"

//div 태그
const newDiv = document.createElement('div')
//div 태그 안의 ul 태그와 li 태그 생성
const newUl2 = document.createElement('ul')
const newLi2 = document.createElement('li')

newUl2.appendChild(newLi2) //li태그 ul 태그에 추가
newDiv.appendChild(newUl2) // ul 태그 div 태그에 추가

newLi2.innerHTML = "<a href=''>회원가입 </a><a href=''>아이디 찾기 </a><a href=''>비밀번호 찾기"




$loginSection.appendChild(newUl) //섹션 태그에 ul 태그 추가
$loginSection.appendChild(newDiv) // 섹션 태그에 div 태그 추가
