const calculate = () => {
    const firstVal = parseInt(document.getElementById('val1').value);
    const secondVal = parseInt(document.getElementById('val2').value);
    console.log(firstVal);
    console.log(secondVal);

    const typeSelected = document.getElementById('selectType');
    const valueType = selectType.options[typeSelected.selectedIndex].value;
    console.log(valueType);

    if (valueType == 'Sum') {
        const result = firstVal + secondVal;
        document.getElementById('resultContainer').innerHTML = `${firstVal} + ${secondVal} = ${result}`;
    } else if (valueType == 'Multi') {
        const result = (firstVal * secondVal);
        document.getElementById('resultContainer').innerHTML = `${firstVal} X ${secondVal} = ${result}`;
    } else if (valueType == 'Minus') {
        const result = (firstVal - secondVal);
        document.getElementById('resultContainer').innerHTML = `${firstVal} - ${secondVal} = ${result}`;
    } else {
        const result = (firstVal / secondVal);
        document.getElementById('resultContainer').innerHTML = `${firstVal} / ${secondVal} = ${result}`;
    }

}