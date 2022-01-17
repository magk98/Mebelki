function changeColor() {
    if (document.getElementById('fotel__MA_Body').getAttribute('diffuseColor') !== '1 0 0')
        document.getElementById('fotel__MA_Body').setAttribute('diffuseColor', '1 0 0');
    else
        document.getElementById('fotel__MA_Body').setAttribute('diffuseColor', '0 0 0');
}
