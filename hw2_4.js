  function number() {
	var a;
	var b;
	a=document.getElementById('one').value;
	b=document.getElementById('two').value;
		a=parseInt(a);
		b=parseInt(b);
	var n = Math.pow(a, b);
      alert (n);

}