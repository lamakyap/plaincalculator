 			var oneBtn = document.getElementById('calc-one');
            var twoBtn = document.getElementById('calc-two');
            var threeBtn = document.getElementById('calc-three');
            var fourBtn = document.getElementById('calc-four');
            var fiveBtn = document.getElementById('calc-five');
            var sixBtn = document.getElementById('calc-six');
            var sevenBtn = document.getElementById('calc-seven');
            var eightBtn = document.getElementById('calc-eight');
            var nineBtn = document.getElementById('calc-nine');
            var zeroBtn = document.getElementById('calc-zero');
            var decimalBtn = document.getElementById('calc-decimal');
            var clearBtn = document.getElementById('calc-clear');
            var equalsBtn = document.getElementById('calc-equals');
            var plusBtn = document.getElementById('calc-plus');
            var minusBtn = document.getElementById('calc-minus');
            var divideBtn = document.getElementById('calc-divide');
            var multiplyBtn = document.getElementById('calc-multiply');
            var backspaceBtn = document.getElementById('calc-backspace');
            var displayValElement = document.getElementById('calc-display-val');
            var calcNumBtns = document.getElementsByClassName("calc-btn-num");
            var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");
         
            var displayVal = '0';
            var pendingVal; // This is the value that the computation is being enacted upon. Keep a number so I don't have to parse it for no reason.
            var evalStringArray = [];
            var numberClick = (num) => {
                if(displayVal === '0')
                    displayVal = '';
                displayVal += num;
                displayValElement.innerHTML = displayVal;
            };
            var updateDisplayVal = (clickObj) => {
                let btnText = clickObj.target.innerText;
                numberClick(btnText);
            };
            var performOperation = (clickObj) => {
                var operation = clickObj.target.innerText;
                switch (operation) {
                    case '+':
                        pendingVal = Number.parseFloat(displayVal);
                        displayVal = '';
                        displayValElement.innerHTML = displayVal;
                        evalStringArray.push(pendingVal);
                        evalStringArray.push('+');
                        break;
                    case '-':
                        pendingVal = Number.parseFloat(displayVal);
                        displayVal = '';
                        displayValElement.innerHTML = displayVal;
                        evalStringArray.push(pendingVal);
                        evalStringArray.push('-');
                        break;
                    case 'x':
                        pendingVal = Number.parseFloat(displayVal);
                        displayVal = '';
                        displayValElement.innerHTML = displayVal;
                        evalStringArray.push(pendingVal);
                        evalStringArray.push('*');
                        break;
                    case '÷':
                        pendingVal = Number.parseFloat(displayVal);
                        displayVal = '';
                        displayValElement.innerHTML = displayVal;
                        evalStringArray.push(pendingVal);
                        evalStringArray.push('/');
                        break;
                    case '=':
                        evalStringArray.push(displayVal);
                        var evaluation = eval(evalStringArray.join(' '));
                        displayValElement.innerHTML = evaluation;
                        displayVal = evaluation;
                        pendingVal = displayVal;
                        evalStringArray = [];
                        displayVal = evaluation + '';
                        break;
                    default:
                        break;
                }
            };
            for (var i = 0; i < calcNumBtns.length; i++) {
                calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
            }
            for (var i = 0; i < calcOperatorBtns.length; i++) {
                calcOperatorBtns[i].addEventListener('click', performOperation, false);
            }
            clearBtn.onclick = () => {
                displayVal = '0';
                pendingVal = undefined;
                evalStringArray = [];
                displayValElement.innerHTML = displayVal;
            };
            backspaceBtn.onclick = () => {
                let lengthOfDisplayVal = displayVal.length;
                displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
                displayValElement.innerHTML = displayVal;
            };



















