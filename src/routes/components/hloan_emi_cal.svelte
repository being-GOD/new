<script>
    
    let month_array=["Jan-","Feb-","Mar-","Apr-","May-","Jun-","Jul-","Aug-","Sep-","Oct-","Nov-","Dec-"]
    let val_1 =100000;
    // validation of input feilds
    $:{
        if (val_1>10000000000){
            val_1=10000000000;
        }else{
            if(!Number(val_1) && val_1){
                val_1=100000;
            }
        }
        
        if(val_2>30){
            val_2=30
        }else{
            if(!Number(val_2) && val_2){
                val_2=1;
            }

        }
        if(val_3>15){
            val_3=15
        }else{
            if(!Number(val_3) && val_3){
                val_3=1;
            }
            
        }
    };
    
    const date = new Date();
    let current_month=date.getMonth(); 
    
    
    function myfun_emi_val_1(){
        if(val_1<100000){
            val_1=100000;
        }else if(val_1>10000000000){
            val_1=10000000000;
        }
    }
    let val_max_1 = 10000000000;
    let val_2 = 1;
    function myfun_emi_val_2(){
        if(val_2<1){
            val_2=1;
        }else if(val_2>30){
            val_2=30;
        }
    }

    let val_max_2 = 30;
    let val_3 = 3;
    function myfun_emi_val_3(){
        if(val_3<0.5){
            val_3=0.5;
        }else if(val_3>15){
            val_3=15;

        }
    }
    let val_max_3 = 15;
    // calculation
    let rate;
    let time;
    let nt;
    let emi_cal;
    let div_cal;
    let total_amount;
    let int_rate;
    $: {
        if(val_1>99999 && val_3>0.01){
            rate=val_3/1200;
            time=12*val_2;
            nt=(1+rate)**time;
            div_cal=nt/(nt-1);
            emi_cal=(val_1*rate*div_cal).toFixed(2);
            // testfor year
            
            if(emi_cal<1 || !(isFinite(emi_cal))){
                emi_cal=0.00;
            }
            total_amount=(emi_cal*(12*val_2)).toFixed(2);
        
            if(total_amount<1 || isNaN(total_amount)){
                total_amount=0.00;
            }
            int_rate=(total_amount-val_1).toFixed(2);
            if(int_rate<1 || isNaN(int_rate)){
                int_rate=0.00;
            }
        }else{
            emi_cal=0.00;
            int_rate=0.00;
            total_amount=0.00;
            
        }
         
         

         
    };
  

 
let b_close;
let p_month;
let inter_val_2;
let int_val;


$:{ 
    int_val=val_1;   
    inter_val_2=int_val*rate;
    
    
    p_month=emi_cal-(val_1*rate);
    b_close =val_1-(emi_cal-(val_1*rate));
    
};

let arr_val;
$: arr_val=[
        {
            'tenur': 1,
            'monthname': month_array[current_month]+ date.getFullYear(),
            'opening_balance':val_1.toLocaleString('en-IN'),
            'emi_month':(Math.round(emi_cal)).toLocaleString('en-IN'),
            'interest_month':(Math.round((val_1*rate))).toLocaleString('en-IN'),
            'principal_month':(Math.round((emi_cal-(val_1*rate)))).toLocaleString('en-IN'),
            'close_bal':(Math.round((val_1-(emi_cal-(val_1*rate))))).toLocaleString('en-IN'),
        }
        
        
       
        
    ];        
// test

 

 $: { 
    let cont_month=0;
    
    let year_increment=1;
  
    for(let i=0; i< val_2 ; i++)
        { 
              
            if(i==0) {
                let current_year=0;
                let year_count_temp=0;
                
                
                for (let j=2; j<13;j++){
                    if(current_month + year_count_temp < 11){
      
                        current_year=date.getFullYear();
                    }else{
                        current_year=date.getFullYear()+1;
                    }
                    let dict={};
                    
                    int_val=b_close;
                    inter_val_2=int_val*rate;
                    
                    p_month=emi_cal-inter_val_2;
                    if(j==12 && val_2==1){
                        b_close=0.00;
                    }else{
                        b_close=int_val-p_month;
                    }
                    let abt;
                    if(j<12){
                        abt=j%12 + (current_month-1);
                    }
                    
                    
                    
                    dict['tenur']=j
                    if( abt<12){
                        dict['monthname']=month_array[abt] + current_year;

                    }else{
                        dict['monthname']=month_array[cont_month] + current_year;

                        cont_month=cont_month+1;
                    
                    }
                    year_count_temp=year_count_temp+1;
                    dict['opening_balance']=(Math.round(int_val)).toLocaleString('en-IN')
                    // dict['emi_month']=(Number(emi_cal)).toLocaleString('en-IN')
                    dict['emi_month']=Math.round(emi_cal).toLocaleString('en-IN')
                    dict['interest_month']=(Math.round(inter_val_2)).toLocaleString('en-IN')
                    dict['principal_month']=(Math.round(p_month)).toLocaleString('en-IN')
                    dict['close_bal']=(Math.round(b_close)).toLocaleString('en-IN')
                    arr_val.push(dict)
                }            
            } else {
               
                
                
                
                for (let j=2+((12*i)-(i/i)); j<13 +(12*i);j++){

                    
                    if(cont_month%12==0){
                        year_increment=year_increment+1;
                    }
                    
                    let dict={};
                    int_val=b_close;
                    inter_val_2=int_val*rate;
                
                    p_month=emi_cal-inter_val_2;
                    if(j==(13+(12*i)-1) && (i==val_2-1)){
                        b_close=0.00;
                    }else{
                        b_close=int_val-p_month;
                    }
                    
                    
                    dict['tenur']=j;
                    dict['monthname']=month_array[cont_month%12]+(date.getFullYear()+year_increment);
                    
                    cont_month=cont_month+1;
                    dict['opening_balance']=(Math.round(int_val)).toLocaleString('en-IN')
                    dict['emi_month']=(Math.round(emi_cal)).toLocaleString('en-IN')
                    dict['interest_month']=(Math.round(inter_val_2)).toLocaleString('en-IN')
                    
                    dict['principal_month']=(Math.round(p_month)).toLocaleString('en-IN')
                    dict['close_bal']=(Math.round(b_close)).toLocaleString('en-IN')
                    arr_val.push(dict)
                    
                }
            }    
        }
   };

            
// function for table_button

 

function table_show_1(){
    let first_table=document.getElementById("table_1")
    let second_table=document.getElementById("table_2")
    let button_1=document.getElementById("button_month")
    let button_2=document.getElementById("button_year")
    button_2.style.background="gray"
    button_1.style.background="green"
    second_table.style.display="none"
    first_table.style.display="block"
    
}

let arrar_test_value=[];



function table_show_2(){
    let second_table=document.getElementById("table_2")
    let first_table=document.getElementById("table_1")
    let button_1=document.getElementById("button_month")
    let button_2=document.getElementById("button_year")
    button_2.style.background="green"
    button_1.style.background="gray"
    first_table.style.display="none"
    second_table.style.display="block"
    
   
    // calculate values for  year table
    arrar_test_value=[];
    
    let close_year_bal=0;
    
    
    for(let j=0;j<val_2;j++){
        
        
        
        if(j==0){
            let count_value_interest=0;
            for(let i=0;i<12;i++){
                let temp_value=arr_val[i]
                count_value_interest=count_value_interest + (Number((temp_value['interest_month']).replace(/\,/g,'')))
                
                               
                
            }
            if(j==val_2-1){
                close_year_bal=0.00;
            }else{
                close_year_bal= val_1-((emi_cal*12) - count_value_interest).toFixed(2);
            }
            
            let dict_year={
                'sec_number': 1,
                'year_value':(date.getFullYear())+"-"+(date.getFullYear()+1),
                'open_bal':val_1.toLocaleString('en-IN'),
                'emi_year':(Math.round((emi_cal*12))).toLocaleString('en-IN'),
                'inter_year':(Math.round(count_value_interest)).toLocaleString('en-IN'),
                'princ_paid_year':(Math.round(((emi_cal*12) - count_value_interest))).toLocaleString('en-IN'),
                'close_bal_year':(Math.round(close_year_bal)).toLocaleString('en-IN')

            }
             
            arrar_test_value=[...arrar_test_value, dict_year]
            
            
        }else{
            
            let k=12*j
            let count_val_2=0;
            for(k;k<12+(12*j);k++){
                let temp_value=arr_val[k]
                count_val_2=count_val_2+(Number((temp_value['interest_month']).replace(/\,/g,'')))
                

                
            }
            let close_balance_year_end = (close_year_bal-((emi_cal*12) - count_val_2)).toFixed(2)
            if(j==val_2-1){
                close_balance_year_end = 0.00;
            }
            
            let dict_year_2={
                'sec_number': j+1,
                'year_value':(date.getFullYear()+(j))+"-"+(date.getFullYear()+(j+1)),
                'open_bal':(Math.round(close_year_bal)).toLocaleString('en-IN'),
                'emi_year':(Math.round((emi_cal*12))).toLocaleString('en-IN'),
                'inter_year':(Math.round(count_val_2)).toLocaleString('en-IN'),
                'princ_paid_year':(Math.round(((emi_cal*12) - count_val_2))).toLocaleString('en-IN'),
                'close_bal_year':(Math.round(close_balance_year_end)).toLocaleString('en-IN')

            }
            close_year_bal=close_year_bal-((emi_cal*12) - count_val_2).toFixed(2);
            arrar_test_value=[...arrar_test_value, dict_year_2]
        }

        
        
        
    }
    
    
   
    
    
}

</script>

<section class="py-8">
    <div class="container m-auto ">
        <div class=" text-center py-10 px-10">
            <p class=" text-3xl md:text-5xl font-bold">Home Loan EMI Calculator</p>
        </div>
        <!--grid for two cols-->
        <div class="grid lg:grid-cols-2 px-16">
            <div>
                <div class="flex justify-between">
                    <h4>Loan Amount</h4>
                    <label for="rupee">₹:
                    <input
                        class=" w-28 md:w-44 border-2"
                        type="text"
                        id="rupee"
                        on:change={myfun_emi_val_1}
                        min="100000"
                        max="10000000000"
                        bind:value={val_1}
                       
                    /></label>
                </div>
                
                <input
                    
                    type="range"
                    bind:value={val_1}
                    min="100000"
                    max={val_max_1}
                    step="1"
                    class="w-full accent-emerald-600 "
                />
                <div class=" flex justify-between">
                    <div class=" m-2">₹ 1 lac</div>
                    <div class="m-2">₹1,000cr</div>
                </div>
                <!---######2 progress bar-->
                <div class="flex justify-between mt-4">
                    <h4>Tenure (Years)</h4>

                    <label for="year">Yr.
                        <input class=" border-2 w-10" id="tenure_time" min="1" max="30" on:change={myfun_emi_val_2} type="text" bind:value={val_2} />
                    </label>
                    
                </div>

                <input
                    type="range"
                    
                    bind:value={val_2}
                    min="1"
                    max={val_max_2}
                    step="1"
                    class="w-full accent-emerald-600"
                />
                <div class=" flex justify-between">
                    <div class=" m-2">1 yr.</div>
                    <div class="m-2">30 yr.</div>
                </div>
                <!---progress bar3-->
                <div class="flex justify-between mt-4">
                    <h4>Interest Rate (% P.A.)</h4>
                    <label for="rate">Rate(%) 
                        <input class=" border-2 w-12" id="rate_per" on:change={myfun_emi_val_3} type="text" bind:value={val_3}/>
                    </label>
                    
                </div>

                <input
                    type="range"
                    id="price"
                    bind:value={val_3}
                    min="0.01"
                    max={val_max_3}
                    step=".01"
                    class="w-full accent-emerald-600"
                />
                <div class=" flex justify-between ">
                    <div class=" m-2">0.01</div>
                    <div class="m-2">15</div>
                </div>
            </div>
            <div class="ml-8 mt-4 bg-fixed ">
                <p class="lg:px-28">Monthly Home Loan EMI</p>
                <p class="lg:px-28 text-4xl text-green-700 font-semibold">
                    <sup>₹</sup>{Math.round(emi_cal).toLocaleString('en-IN')}
                </p>
                <p class="lg:px-28 font-semibold mt-2">Principal Amount</p>
                <p class="lg:px-28 font-semibold text-xl">
                    <sup>₹</sup>{#if (val_1==null || val_1<100000)}
                                    0.00
                                {:else}
                                    {val_1.toLocaleString('en-IN')}    
                                {/if}
                                
                </p>
                <p class="lg:px-28 font-semibold mt-2">Interest Amount</p>
                <p class="lg:px-28 font-semibold text-xl">
                    <sup>₹</sup>{Math.round(int_rate).toLocaleString('en-IN')}
                </p>
                <p class="lg:px-28 font-semibold mt-2">Total Amount Payable</p>
                <p class="lg:px-28 font-semibold text-xl">
                    <sup>₹</sup>{Math.round(total_amount).toLocaleString('en-IN')}
                </p>
                <p class="lg:px-28 font-semibold">Need more information?</p>
                <a href="tel:1204994466">
                    <button
                    class=" hover:bg-green-800 lg:ml-24 mt-4 bg-green-700 rounded-xl px-14 py-4 text-white"
                    >Talk to our Loan Export</button
                >
                </a>
                
            </div>
        </div>
        <!--@@@@@@@@@@@@@@######################-->
        <div class=" text-center py-8 grid md:grid-cols-2  px-8">
           
            <a href="/mortgage-calculator/home-loan-eligibility-calculator" class=" py-3   md:mr-14 md:ml-14 mr-0 md:mt-0  rounded-xl bg-green-700  text-white">Eligibility Calculator</a>

            
            
            <a href="/mortgage-calculator/home-loan-balance-transfer-calculator" class="py-3 px-3  rounded-xl bg-green-700 text-white md:mr-14 md:ml-14 mt-3 md:mt-0">Balance transfer Calculator</a>

            
        </div>
        
       
        <p class=" text-center font-semibold text-5xl  py-10">Home Loan Amortization Schedule</p>
        <!--table-->
        <div class="py-3 text-white px-3 md:px-0">
            <button on:click={table_show_1} class=" py-3 px-3 rounded-2xl" id="button_month">Monthly</button>
            <button on:click={table_show_2} class=" py-3 px-5 rounded-2xl ml-2 bg-gray-500" id="button_year">Yearly</button>
        </div>
        
        
        <!----guuhnkok---------------->
        <div class=" overflow-auto  h-96 px-3 md:px-0 " id="table_1">
            <table class=" relative text-xs md:text-base  ">
                <thead class=" bg-green-800 text-white border-2 border-black  ">
                    <tr>
                        <th >S/No.</th>
                        <th>Month</th>
                        <th>Opening Balance</th>
                        <th>EMI</th>
                        <th>Interest</th>
                        <th>Principal</th>
                        <th>Closing Balance</th>
                        
                    </tr>    
                </thead>

                <tbody class=" bg-slate-100 font-semibold md:font-normal">
                    
                    
                    
                    {#each arr_val as bt }
                        <tr>
                            
                                
                            <td>{bt.tenur}</td>
                            <td>{bt.monthname}</td>
                            <td>{bt.opening_balance}</td>
                            <td>{bt.emi_month}</td>
                            <td>{bt.interest_month}</td>
                            <td>{bt.principal_month}</td>
                            <td>{bt.close_bal}</td>
                        
                                
                        </tr>
                    {/each}   
                        
                     
                </tbody>
            </table>
        </div>
        <!--------------------------table 2--------------------->
        
        <div class=" overflow-auto  h-96" id="table_2">
            
            <table class=" relative text-xs md:text-base">
                <thead class=" bg-green-800 text-white border-2 border-black ">
                    <tr>
                        <th >S/No.</th>
                        <th>Year</th>
                        <th>Opening Balance</th>
                        <th>EMI*12</th>
                        <th>Interest</th>
                        <th>Principal</th>
                        <th>Closing Balance</th>
                        
                    </tr>    
                </thead>

                <tbody class=" bg-slate-100 font-semibold md:font-normal">
                    
                    
                        {#each arrar_test_value as btst }
                            <tr>
                               
                                   
                                <td>{btst.sec_number}</td>
                                <td>{btst.year_value}</td>
                                <td>{btst.open_bal}</td>
                                <td>{btst.emi_year}</td>
                                <td>{btst.inter_year}</td>
                                <td>{btst.princ_paid_year}</td>
                                <td>{btst.close_bal_year}</td>
                            
                                    
                            </tr>
                        {/each}
                    
                    
                    
                     
                </tbody>
            </table>
        </div>
        
    
    </div>

</section>

<!---css for table-->
<style>
    table, td,th{
      border: 1px solid;
      text-align: center;
      
      height: 50px;
      
    }
    th{
        top: 0px;
        position: sticky;
        background: #017a4e;
    }
   
    
    
    table {
      
      border-collapse: collapse;
      width: 100%;
      
    }
    #table_2{
        display: none;
    }
    #button_month{
        background-color: rgb(22, 104, 22);
    }
   
</style>
