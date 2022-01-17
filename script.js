function changeColor(element, color) {
        // const elementId = element + '__MA_Body'; //dla fotela
        const elementId = element + '__MA_lambert2'; //dla krzesla

        document.getElementById(elementId).setAttribute('diffuseColor', color);
}
