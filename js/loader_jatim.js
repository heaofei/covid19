var jatimGetData = function(callback) {
  $.get('data/jatim.json', function(res) { 
    // var rawJson = res;
    var arrProvinsi = res;
    var result = [];
    var cnt = 1;
    for (const o of arrProvinsi) {
        var newObj = {
            no: cnt,
            nama: o.nama,
            jml_kasus: o.jml_kasus,
            jml_sembuh: o.jml_sembuh,
            jml_meninggal: o.jml_meninggal,
            jml_odp: o.jml_odp,
            jml_pdp: o.jml_pdp
        }
        cnt++;
        result.push(newObj);
    }
    callback(result);
    // console.log(res[0])
  })
}