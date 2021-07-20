function result() {
    var students= {
        RAFATH : {
            mfcs : "75",
            cpds: "95",
            java : "85",
            dbms : "89",
            pcs :  "90"

        },
         RANI :{
        mfcs : "65",
        cpds: "60",
        java : "60",
        dbms : "90",
        pcs :  "90"
        },
        FEROZ: {
        mfcs : "95",
        cpds: "45",
        java : "65",
        dbms : "79",
        pcs :  "70"
        },
        FARRED: {
        mfcs : "85",
        cpds: "95",
        java : "55",
        dbms : "59",
        pcs :  "f"
        },
         SARAH :{
        mfcs : "75",
        cpds: "75",
        java : "f",
        dbms : "f",
        pcs :  "60"
        },
        SUNNY:{
         result1: "mess fee due"
        },
    }
    
    var studentName=document.getElementById('studentName').value;
    var input=studentName.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if(definition==undefined) {
        output.innerHTML='<hr> There is no information about this student.<hr>';
    } else{
        output.innerHTML=`<hr> mfcs score is ${definition.mfcs} <hr> cpds score is ${definition.cpds}.<hr> pcs score is ${definition.pcs}.<hr> dbms score is ${definition.dbms}.<hr> java score is ${definition.java}.`;
    };
}
