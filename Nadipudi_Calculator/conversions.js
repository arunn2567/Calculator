/**
 * Created by arun9 on 1/30/2017.
 */
$(document).ready(function () {
    $('#litres').keyup(function () {
        var input =   $('#litres').val()

        input = input * 0.2199
        updatescreen(input)

    })
    function updatescreen(i) {
        var i = i.toString()
        $('#Gallons').val(i.substring(0, 10))
    }

    $('#Gallons').keyup(function () {
        var input =   $('#Gallons').val()

        input = input * 4.54
    $('#litres').val(input)

    })


    $('#Centimetres').keyup(function () {
        var input =   $('#Centimetres').val()

        input = input * 0.393
        $('#Inches').val(input)

    })

    $('#Inches').keyup(function () {
        var input =   $('#Inches').val()

        input = input * 2.54
        $('#Centimetres').val(input)

    })


})




