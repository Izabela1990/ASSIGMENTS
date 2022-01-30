function scrie(n){
        document.form.area.value = document.form.area.value+n
      }
      function egal() {
        var c = document.form.area.value;
        if (c){
          document.form.area.value = eval(c);
        }
      }

      function reseteaza() {
        document.form.area.value = '';
      }

      function sterge() {
        var a = document.form.area.value;
        document.form.area.value = a.substring(0, a.length-1);
      }