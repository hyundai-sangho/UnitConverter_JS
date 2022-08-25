// 버튼
let changeFahrenheitButton = document.querySelector("#changeFahrenheitButton");
let changeInchButton = document.querySelector("#changeInchButton");
let changeGallonButton = document.querySelector("#changeGallonButton");

// input 박스
let changeFahrenheitInput = document.querySelector("#changeFahrenheitInput");
let changeInchInput = document.querySelector("#changeInchInput");
let changeGallonInput = document.querySelector("#changeGallonInput");

// 정규표현식 영어 문자, 한글 문자만
const regex = /[a-zA-Z가-힣ㄱ-ㅎ]/;

// 화씨 변환 버튼 클릭시
changeFahrenheitButton.addEventListener("click", () => {
  if (regex.test(changeFahrenheitInput.value) !== true && changeFahrenheitInput.value !== "") changeFahrenheitInput.value = Math.round((changeFahrenheitInput.value - 32) * (5 / 9)) + "도";
});

// 화씨 인풋 박스에서 엔터치면
changeFahrenheitInput.addEventListener("keypress", (이벤트) => {
  if (regex.test(changeFahrenheitInput.value) !== true && 이벤트.code == "Enter" && changeFahrenheitInput.value !== "") changeFahrenheitInput.value = Math.round((changeFahrenheitInput.value - 32) * (5 / 9)) + "도";
});

// 인치 변환 버튼 클릭시
changeInchButton.addEventListener("click", () => {
  if (regex.test(changeInchInput.value) !== true && changeInchInput.value !== "") changeInchInput.value = changeInchInput.value * 2.54 + "센치";
});

// 인치 인풋 박스에서 엔터치면
changeInchInput.addEventListener("keypress", (이벤트) => {
  if (regex.test(changeInchInput.value) !== true && 이벤트.code == "Enter" && changeInchInput.value !== "") changeInchInput.value = changeInchInput.value = changeInchInput.value * 2.54 + "센치";
});

// 갤런 변환 버튼 클릭시
changeGallonButton.addEventListener("click", () => {
  if (regex.test(changeGallonInput.value) !== true && changeGallonInput.value !== "") changeGallonInput.value = (changeGallonInput.value * 3.785411784).toFixed(3) + "리터";
});

// 갤런 인풋 박스에서 엔터치면
changeGallonInput.addEventListener("keypress", (이벤트) => {
  if (regex.test(changeGallonInput.value) !== true && 이벤트.code == "Enter" && changeGallonInput.value !== "") changeGallonInput.value = (changeGallonInput.value * 3.785411784).toFixed(3) + "리터";
});
