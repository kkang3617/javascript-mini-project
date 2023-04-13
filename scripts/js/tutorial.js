
const $start = document.querySelector('.wrapper .start-button');

$start.addEventListener('click', e => {
    const $main = document.querySelector('.main')
    const $tutorialBox1 = document.createElement('div');

    /* 첫번째 텍스트박스 */
    $main.appendChild($tutorialBox1);
    $tutorialBox1.className = 'tutorialBox1';
    $tutorialBox1.style.position = 'absolute';
    $tutorialBox1.style.top = '65%';
    $tutorialBox1.style.left = '5%';
    $tutorialBox1.style.width = '60%';
    $tutorialBox1.style.height = '30%';
    $tutorialBox1.style.borderRadius = '20px';
    $tutorialBox1.style.background = 'black';
    $tutorialBox1.style.opacity = '0.7';
    $tutorialBox1.style.color = 'white';
    $tutorialBox1.style.fontSize = '30px';
    $tutorialBox1.innerHTML = '화살표 위치의 엄마 슬라임 버튼을 <br> 선택하여 주세요.';
    $tutorialBox1.style.textAlign = 'center';
    $tutorialBox1.style.lineHeight = '200%';
    $tutorialBox1.style.padding = '65px 10%';
    $tutorialBox1.style.boxSizing = 'border-box';

    /* 첫번째 노란색박스 */
    const $yellowBox1 = document.createElement('div');

    $main.appendChild($yellowBox1);
    $yellowBox1.className = 'yellowBox1';
    $yellowBox1.style.position = 'absolute';
    $yellowBox1.style.border = '5px solid yellow';
    $yellowBox1.style.borderRadius = '20px';
    $yellowBox1.style.top = '0%';
    $yellowBox1.style.left = '85%';
    $yellowBox1.style.width = '14%';
    $yellowBox1.style.height = '19%';

    /* 첫번째 위 화살표*/
    const $up = document.createElement('i');

    $main.appendChild($up);
    $up.className = 'lnr lnr-chevron-up';
    $up.style.position = 'absolute';
    $up.style.color = 'yellow';
    $up.style.fontSize = '60px';
    $up.style.fontWeight = 'bold';
    $up.style.left = '90.5%';
    $up.style.bottom = '72%';

    const block1 = setTimeout(() => {
        $tutorialBox1.style.display = 'none';
        $yellowBox1.style.display = 'none';
        $up.style.display = 'none';
        $tutorialBox2.style.display = 'block';
        $yellowBox2.style.display = 'block';
        $down.style.display = 'block';
        clearTimeout(block1);
    }, 7000);

    /* 두번째 텍스트박스 */
    const $tutorialBox2 = document.createElement('div');

    $main.appendChild($tutorialBox2);
    $tutorialBox2.className = 'tutorialBox2';
    $tutorialBox2.style.display = 'none';
    $tutorialBox2.style.position = 'absolute';
    $tutorialBox2.style.top = '65%';
    $tutorialBox2.style.left = '5%';
    $tutorialBox2.style.width = '60%';
    $tutorialBox2.style.height = '30%';
    $tutorialBox2.style.borderRadius = '20px';
    $tutorialBox2.style.background = 'black';
    $tutorialBox2.style.opacity = '0.7';
    $tutorialBox2.style.color = 'white';
    $tutorialBox2.style.fontSize = '30px';
    $tutorialBox2.innerHTML = '해당 박스를 클릭해 주시면,<br> 엄마 슬라임을 생성하실 수 있습니다.';
    $tutorialBox2.style.textAlign = 'center';
    $tutorialBox2.style.lineHeight = '200%';
    $tutorialBox2.style.padding = '65px 10%';
    $tutorialBox2.style.boxSizing = 'border-box';

    /* 두번째 노란색박스 */
    const $yellowBox2 = document.createElement('div');

    $main.appendChild($yellowBox2);
    $yellowBox2.className = 'yellowBox2';
    $yellowBox2.style.display = 'none';
    $yellowBox2.style.position = 'absolute';
    $yellowBox2.style.border = '5px solid yellow';
    $yellowBox2.style.borderRadius = '20px';
    $yellowBox2.style.top = '40%';
    $yellowBox2.style.left = '70%';
    $yellowBox2.style.width = '14%';
    $yellowBox2.style.height = '19%';

    /* 두번째 아래화살표 */
    const $down = document.createElement('i');

    $main.appendChild($down);
    $down.className = 'lnr lnr-chevron-down';
    $down.style.position = 'absolute';
    $down.style.color = 'yellow';
    $down.style.fontSize = '60px';
    $down.style.fontWeight = 'bold';
    $down.style.left = '75.5%';
    $down.style.bottom = '60%';
    $down.style.display = 'none';

    const block2 = setTimeout(() => {
        $tutorialBox2.style.display = 'none';
        $yellowBox2.style.display = 'none';
        $down.style.display = 'none';
        $tutorialBox3.style.display = 'block';
        clearTimeout(block2);
    }, 14000);

    const $tutorialBox3 = document.createElement('div');

    $main.appendChild($tutorialBox3);
    $tutorialBox3.className = 'tutorialBox3';
    $tutorialBox3.style.display = 'none';
    $tutorialBox3.style.position = 'absolute';
    $tutorialBox3.style.top = '65%';
    $tutorialBox3.style.left = '5%';
    $tutorialBox3.style.width = '60%';
    $tutorialBox3.style.height = '30%';
    $tutorialBox3.style.borderRadius = '20px';
    $tutorialBox3.style.background = 'black';
    $tutorialBox3.style.opacity = '0.7';
    $tutorialBox3.style.color = 'white';
    $tutorialBox3.style.fontSize = '30px';
    $tutorialBox3.innerHTML = ' 내용 <br> 내용';
    $tutorialBox3.style.textAlign = 'center';
    $tutorialBox3.style.lineHeight = '200%';
    $tutorialBox3.style.padding = '65px 10%';
    $tutorialBox3.style.boxSizing = 'border-box';

    const block3 = setTimeout(() => {
        $tutorialBox3.style.display = 'none';
        clearTimeout(block3);
    }, 21000);


});

