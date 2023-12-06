const inputCash=document.querySelector("#inputCash")
const listCash=document.querySelector("#listCash")
const alertContainer=document.querySelector("#alertContainer")
const cashBack=document.querySelector("#cashBack")


const addBtn=document.querySelector("#addBtn")
const displayBtn=document.querySelector("#displayBtn")


const cashBackObj={

    
    date:new Date(),
    cashbackList:[],

    calcCash:function(m){
        const cashbackAmount=m * 0.03
        
        const info={
            type:"Add",
            amount:m,
            remained:cashbackAmount,
            created:this.date.toLocaleString()
        }

        this.cashbackList.push(info)
        this.showCashbackList()


        alertContainer.classList.remove('d-none');
        cashBack.textContent = `Your cashback is $${cashbackAmount.toFixed(2)}`;

    },

    showCashbackList:function(){
        console.log(cashBackObj.cashbackList);
    }
}



addBtn.addEventListener("click",function(){
    const value = parseFloat(inputCash.value);
    if (!isNaN(value)) {
      cashBackObj.calcCash(value);
      inputCash.value = "";
    } else {
      alertContainer.classList.remove('d-none');
      cashBack.textContent = 'Please enter a valid number';
    }

    setTimeout(function() {
        alertContainer.classList.add('d-none');
      }, 1000);

})


displayBtn.addEventListener("click",function(){
    let content=cashBackObj.cashbackList
    let newContent=content.map((item,index)=>{
        return `<tr>
        <th scope="row">${index+1}</th>
        <td>${item.amount} $</td>
        <td>${item.remained.toFixed(2)} $</td>
        <td>${item.created}</td>
      </tr>`
    }).join("")
    listCash.innerHTML=newContent
})