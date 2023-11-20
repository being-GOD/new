<script>
    // import CurrencyInput from '@canutin/svelte-currency-input';
    // validation for input feild
    $:{
        if(val_1>10000000){
            val_1=10000000
        }
        if(val_2>30){
            val_2=30;
        }
        if(val_3>15){
            val_3=15;
        }
        if(val_4>10000000){
            val_4=10000000
        }
    }; 
    let val_1 = 10000;
    function myfun_eli_val_1(){
        if(val_1<10000){
            val_1=10000;
        }else if(val_1>10000000){
            val_1=10000000;
        }
    }
    let val_max_1= 10000000;
    let val_2=30;
    function myfun_eli_val_2(){
        if(val_2<1){
            val_2=1;
        }else if(val_2>30){
            val_2=30;
        }
    }
    let val_max_2=30;
    let val_3=8.5;
    function myfun_eli_val_3(){
        if(val_3<0.01){
            val_3=0.01;
        }else if(val_3>15){
            val_3=15;
        }

    }
    let val_max_3=15;
    let val_4=0;
    function myfun_eli_val_4(){
        if(val_4<1){
            val_4=0;
        }else if(val_4>10000000){
            val_4=10000000;
        }

    }
    let val_max_4=10000000;

    let gmi;
    let foir;
    let obli;
    let def_val=100000;
    let per_lac_emi;
    let loan_el;
    let loan_eligibility;
    let rate;
    let time;
    let nt;
    let divide_cal;
    let emi_eli;
    let formate_loan_eli;

$: {
    
    rate=val_3/1200;
    time=12*val_2;
    nt=(1+rate)**time;
    divide_cal=nt/(nt-1);
    per_lac_emi=(def_val*rate*divide_cal).toFixed(2);
}    


$: {
    if(val_3>0.01 && val_4>=0){
        gmi=val_1
        if(gmi>50000){
            foir=0.55
        }else{
            foir=0.45
        }
        obli=val_4

        loan_el=((gmi*foir)-obli)/per_lac_emi
        loan_eligibility=Math.round((loan_el*100000))
        formate_loan_eli=loan_eligibility.toLocaleString('en-IN')
        if(loan_eligibility<1 || !(isFinite(loan_eligibility))){
            formate_loan_eli="Your other EMI is more";
        }
        emi_eli=(loan_eligibility*rate*divide_cal).toFixed(2)
        if(emi_eli<1 || isNaN(emi_eli)){
            emi_eli=0.00;
        }
    }else {
        loan_eligibility=0.00;
        emi_eli=0.00;
    }
}   
//testing code-----

	
</script>

<section class="py-8">
    <div class="container m-auto py-10">
        <div class=" text-center md:py-10 py-4 px-10">
            <p class=" md:text-5xl text-3xl font-bold ">Loan Eligibility Calculator</p>
            <p class="py-8">Home Loan Eligibility Calculator is dependent on factors such as your monthly income, current age, credit score, fixed monthly financial obligations, credit 
                <br> history, retirement age etc. Get the peace of mind by knowing all the details about your loan using  Home Loan Eligibility Calculator</p>
            <p class=" font-bold text-3xl">Calculate Home Loan Eligibility</p>
        </div>
        <!--grid for two cols-->
        <div class="grid lg:grid-cols-2 px-16">
            <div >
                <div class="flex justify-between">
                    <h4>Gross Income (Monthly)</h4>
                    <label for="rupee">₹:
                        <input class="w-15 border-2" type="number" on:change={myfun_eli_val_1} min="10000" bind:value={val_1} >
                    </label>
                    
                </div>
                
                <input type="range"  bind:value={val_1} min="0" max={val_max_1} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between" >
                    <div class=" m-2 ">
                        ₹ 10k
                    </div>
                    <div class="m-2">
                        ₹1cr
                    </div>
                </div>
                <!---######2 progress bar-->
                <div class="flex justify-between mt-4">
                    <h4>Tenure (Years)</h4>
                    
                    <label for="year">Yr.<input class=" border-2 w-10" on:change={myfun_eli_val_2} type="number" bind:value={val_2} ></label>
                </div>
                
                <input type="range" id="price" bind:value={val_2} min="0" max={val_max_2} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between" >
                    <div class=" m-2 ">
                        1yr.
                    </div>
                    <div class="m-2">
                        30yr.
                    </div>
                </div>
                <!---progress bar3-->
                <div class="flex justify-between mt-4">
                    <h4>Interest Rate (% P.A.)</h4>
                    <label for="rate">Rate(%)
                        <input class=" border-2 w-12" on:change={myfun_eli_val_3} type="number"  bind:value={val_3} >
                    </label>
                    
                </div>
                
                <input type="range" bind:value={val_3} min="0" max={val_max_3} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between " >
                    <div class=" m-2 ">
                        0.01
                    </div>
                    <div class="m-2">
                        15
                    </div>
                </div>
                <!--progress bar 4-->
                <div class="flex justify-between mt-4">
                    <h4>Other EMIs (Monthly)</h4>
                    <label for="rupee">₹:
                        <input class=" border-2 w-15" on:change={myfun_eli_val_4} type="" bind:value={val_4} >
                    </label>
                    
                </div>
                
                <input type="range" bind:value={val_4} min="0" max={val_max_4} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between " >
                    <div class=" m-2 ">
                        ₹0
                    </div>
                    <div class="m-2">
                        ₹1cr
                    </div>
                </div>
  
            

            </div>
            <div class="md:ml-8 ml-0 mt-4 ">
                <p class="lg:px-32">Your Home Loan Eligibility</p>
                <p class="lg:px-32 text-xl md:text-3xl text-green-800 font-bold"><sup>₹</sup>{formate_loan_eli}</p>
                <p class="lg:px-32 font-semibold text-sm mt-3">Your Home Loan EMI will be</p>
                <p class="lg:px-32 text-3xl text-green-800 font-semibold"> <sup>₹</sup>{Math.round(emi_eli).toLocaleString('en-IN')} /month</p>
                <a href="/start">
                    <button class=" hover:bg-green-800 lg:ml-24 mt-4 bg-green-700 rounded-xl px-14 py-4 text-white"> Apply Now</button>
                </a>
                <br>
                <div class=" grid md:grid-cols-2 py-9">
                    <a href="/mortgage-calculator/home-loan-emi-calculator" class="  py-4 px-8 bg-green-700 text-white rounded-xl lg:ml-24  ">EMI Calculator</a>
                    <a href="/mortgage-calculator/home-loan-balance-transfer-calculator" class="  py-4 px-8 bg-green-700 text-white rounded-xl m-auto mt-4 md:mt-0 md:ml-2 ml-0  ">Balance transfer Calculator</a>
                </div>
                
            </div>


        </div>
        
    </div>

   <!---------------testttttttttttt--------->
   
   


</section>
