/**
 * Created by arun9 on 1/28/2017.
 */
$(document).ready(function() {
    var btnpressed = ''
    var currentry = ''
    var currentry_default = '0'
    var preventry = ''
    var operator = ''
    $("#menu").on('click', function() {
        $('#list').addClass("active")
    });
    $('#last_list').click(function () {
        $('#list').addClass("disable")
    });
    $(':button').hover(function () {
        $(this).css('box-shadow',' 1px 1px 0px 1px ')
    }).click(function () {
        $(this).css('box-shadow',' inset 1px 1px 0px 1px ')
    }).mouseleave(function () {
        $(this).css('box-shadow',' none ')
    })
        //.focus(function () {
    //     $(this).css('background-color','lightgrey ')
    // })
    $(":button").click((function (event) {
        btnpressed = $(event.target).val()

        if (btnpressed == 1 || btnpressed == 2 || btnpressed == 3 || btnpressed == 4 || btnpressed == 5 || btnpressed == 6 || btnpressed == 7 || btnpressed == 8 || btnpressed == 9) {
            // console.log(btnpressed)
            currentry = currentry + btnpressed
            updatescreen(currentry)
        } else {
            if (btnpressed == 'C') {
                currentry = ''
                preventry = ''
                operator = ''
                updatescreen(currentry_default)
            }
            else if (btnpressed == '√') {
                currentry = Math.sqrt(currentry).toFixed(2)
                updatescreen(currentry)
            }
            else if (btnpressed == 'x^2') {
                currentry = currentry * currentry
                updatescreen(currentry)
            }
            else {
                if (btnpressed == '1/x') {
                    currentry = 1 / currentry
                    updatescreen(currentry)
                }
                else {
                    if (btnpressed == '-' || btnpressed == '+' || btnpressed == '/' || btnpressed == '*') {
                        preventry = currentry
                        operator = btnpressed
                        currentry = ''
                        updatescreen(operator)
                    }
                    else {
                        if (btnpressed == '+/-') {
                            currentry = currentry * -1
                            updatescreen(currentry)
                        }

                        else {
                            if (btnpressed == '=') {
                                currentry = parseFloat(calculate(preventry, currentry, operator).toFixed(2))
                                updatescreen((currentry))
                            }
                            else {
                                if (btnpressed == "<<<") {
                                    if (currentry.length != 1) {
                                        currentry = (currentry.substring(0, currentry.length - 1))

                                        updatescreen(currentry)

                                    } else {
                                        updatescreen(currentry_default)
                                    }
                                    // else {
                                } else {
                                    if (btnpressed == '%') {

                                        currentry = currentry / 100;
                                        var result = preventry * currentry
                                        updatescreen(result)

                                    } else {
                                        if (btnpressed == '.') {
                                            currentry = currentry + '.'
                                            updatescreen(currentry)
                                        }
                                        else {
                                            if (btnpressed == 'CE') {
                                                currentry = ''
                                                updatescreen(currentry_default)
                                            }else{
                                                if(btnpressed=='0'){
                                                    if(currentry!=0){
                                                        currentry=currentry+btnpressed
                                                        updatescreen(currentry)
                                                    }else {
                                                        updatescreen(currentry_default)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                //     if(btnpressed=='%'){
                                //         currentry
                                //     }
                                // }
                            }

                            function calculate(a, b, i) {
                                if (i == '-') {
                                    return a - b;
                                }
                                else {
                                    if (i == '+') {
                                        return parseInt(a) + parseInt(b);
                                    }
                                    else {
                                        if (i == '/') {
                                            return a / b;
                                        } else {
                                            if (i == '*') {
                                                return a * b;
                                            }
                                        }
                                    }
                                }

                            }
                        }

                    }
                }

            }

        }
        function updatescreen(i) {
            var i = i.toString()
            $('#cal_screen').val(i.substring(0, 10))
        }


    }));
})

