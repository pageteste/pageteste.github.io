function truncarParaDuasCasasDecimais(a) {
    let e = Math.round(1e3 * a);
    return 9 == e % 10 ? (Math.floor(e / 10) + 1) / 100 : Math.floor(e / 10) / 100
}

function validarInputNumerico(a) {
    a.value = a.value.replace(/,/g, "."), a.value = a.value.replace(/[^0-9.]/g, "")
}

function calculateSalarioLiquido() {
    var a = parseFloat(document.getElementById("salario_bruto").value.replace(",", "."));
    if (isNaN(a)) {
        alert("Insira um valor para efetuar o c\xe1lculo.");
        return
    }
    var e = 0,
        t = "";
    a <= 1320 ? (e = truncarParaDuasCasasDecimais(.075 * a), t = "7,5%") : a <= 2571.29 ? (e = truncarParaDuasCasasDecimais(99) + truncarParaDuasCasasDecimais((a - 1320.01) * .09), t = "9%") : a <= 3856.94 ? (e = truncarParaDuasCasasDecimais(99) + truncarParaDuasCasasDecimais(112.61519999999999) + truncarParaDuasCasasDecimais((a - 2571.3) * .12), t = "12%") : a <= 7507.49 ? (e = truncarParaDuasCasasDecimais(99) + truncarParaDuasCasasDecimais(112.61519999999999) + truncarParaDuasCasasDecimais((3856.94 - 2571.3) * .12) + truncarParaDuasCasasDecimais((a - 3856.95) * .14), t = "14%") : (e = 876.95, t = "14%");
    var r = truncarParaDuasCasasDecimais(a - e),
        n = r.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }),
        i = e.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    document.getElementById("previdencia_desconto").textContent = e.toFixed(2), document.getElementById("aliquota_previdencia").textContent = t, document.getElementById("salario_liquido").textContent = r.toFixed(2), document.getElementById("previdencia_desconto").textContent = i, document.getElementById("salario_liquido").textContent = n
}

function handleKeyPress(a) {
    13 === a.keyCode && (a.preventDefault(), calculateSalarioLiquido())
}

function limparFormulario() {
    document.getElementById("salario_bruto").value = "", document.getElementById("previdencia_desconto").textContent = "0,00", document.getElementById("aliquota_previdencia").textContent = "%", document.getElementById("salario_liquido").textContent = "0,00"
}

function toggleNav() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
  }