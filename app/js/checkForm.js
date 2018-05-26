function checkForm(input, reg) {
    this.reg = reg;
    this.input = input;
    console.log(this.input);
   // console.log(this.reg);
    if ((this.reg).test(this.input.val())) {
        $(this.input).toggleClass('success');
        $('#dispatch').css("display", "block");
    } else {
        $(this.input).toggleClass('error');
    }
}