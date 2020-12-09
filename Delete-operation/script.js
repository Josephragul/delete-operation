        function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



            // ################# on table without selcting checkbox #######################
            DeleteSelectedRow = document.querySelectorAll('.DeleteSelectedRow');
            DeleteSelectedRow.forEach(onebyone => {
                onebyone.addEventListener('click', function() {
                    {
                        currentROW = this.parentElement.parentElement;

                        document.getElementById('showModelB4Del').style.display = 'flex';
                        showModelB4Del = document.getElementById('showModelB4Del');
                        showModelB4Del.addEventListener('click', function(e) {
                            if (e.target.classList[0] == 'closModalMsg') {
                                showModelB4Del.style.display = 'none';
                            } else if (e.target.id == 'yesDelContact') {
                                setTimeout(function() {
                                    currentROW.classList.add('b4Remove');
                                    currentROW.addEventListener('transitionend', function() {
                                        currentROW.remove();
                                    })
                                }, 200)
                                showModelB4Del.style.display = 'none';
                            }

                        })
                    }
                })
            })

            // ################# if all selected .select all checkbox ###################

            selectAll = document.getElementById('selectAll');
            selectAll.addEventListener('click', function() {
                if (this.checked) {
                    tbody = this.parentElement.parentElement.parentElement.nextElementSibling;
                    AllInputs = [...tbody.querySelectorAll('input[type="checkbox"]')];

                    AllInputs.forEach(onebyone => {
                        onebyone.checked = true;

                        onebyone.parentElement.parentElement.classList.add('selectedRow_checkboxChecked')
                    })

                } else if (!this.checked) {
                    console.log('false  ')
                    tbody_false = this.parentElement.parentElement.parentElement.nextElementSibling;
                    AllInputs_false = [...tbody_false.querySelectorAll('input[type="checkbox"]')];

                    AllInputs_false.forEach(onebyone_false => {

                        onebyone_false.checked = false;
                        onebyone_false.parentElement.parentElement.classList.remove('selectedRow_checkboxChecked')
                    })

                }




            })



            // ############### selected checkbox rows add class to hightlight #######################

            checkbox_insideTBODY = document.querySelectorAll('.checkbox_insideTBODY');
            checkbox_insideTBODY.forEach(onebyone => {
                onebyone.addEventListener('click', function() {

                    currentTR = onebyone.parentElement.parentElement;
                    if (onebyone.checked == true) {
                        currentTR.classList.add('selectedRow_checkboxChecked')
                    } else {
                        currentTR.classList.remove('selectedRow_checkboxChecked')
                    }


                })
            })




            arrHolder_checked = [];

            main_allDelButton = document.getElementsByClassName('DeleteAllSelectedRow')[0];

            main_allDelButton.addEventListener('click', function() {

                checkbox_insideTBODY = document.querySelectorAll('.checkbox_insideTBODY');
                checkbox_insideTBODY.forEach(onebyone => {


                    if (onebyone.checked == true) {

                        CurrentTRs = onebyone.parentElement.parentElement;
                        arrHolder_checked.push(CurrentTRs)



                        document.getElementById('showModelB4Del').style.display = 'flex';
                        showModelB4Del = document.getElementById('showModelB4Del');
                        showModelB4Del.addEventListener('click', function(e) {
                            if (e.target.classList[0] == 'closModalMsg') {
                                showModelB4Del.style.display = 'none';
                            } else if (e.target.id == 'yesDelContact') {
                                setTimeout(function() {
                                    arrHolder_checked.forEach(onebyoneoncckbox => {
                                        onebyoneoncckbox.classList.add('b4Remove');
                                        onebyoneoncckbox.addEventListener('transitionend', function() {
                                            onebyoneoncckbox.remove();
                                            document.getElementById('selectAll').checked = false;
                                        })
                                    })

                                }, 200)
                                showModelB4Del.style.display = 'none';
                            }

                        })


                    }



                })



            })