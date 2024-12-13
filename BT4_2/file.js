function display(val){
    document.getElementById('result').value += val
    return val
    }
function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
        document.getElementById('result').value = y
    return y
    }
function clearScreen(){
        document.getElementById('result').value = ""
    }
    function a_cong_b(form) {
        a=eval(form.a.value);
        b=eval(form.b.value);
        c=a+b;
        form.ans.value = c;
    }
    function a_tru_b(form) {
        a=eval(form.a.value);
        b=eval(form.b.value);
        c=a-b;
        form.ans.value=c;
    }
    function a_nhan_b(form) {
        a=eval(form.a.value);
        b=eval(form.b.value);
        c=a*b;
        form.ans.value=c;
    }
        function a_chia_b(form){
        a=eval(form.a.value);
        b=eval(form.b.value);
        c=a/b;
        form.ans.value = c;
    }
        function a_mu_b(form) {
        a=eval(form.a.value);
        b=eval(form.b.value);
        c=Math.pow(a, b);
        form.ans.value = c;
    }
