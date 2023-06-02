const { createClient } = supabase
 
// just add the keys 
supabase = createClient("https://uryjsoflpaycebbdoijr.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWpzb2ZscGF5Y2ViYmRvaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MDM4ODAsImV4cCI6MTk5NDQ3OTg4MH0.7SMduIi9AHCtV_FE1JYwLmw4XpmL6c49RvapSfh2qPE")
 
const form = document.querySelector("#new_user_detials")
 
form.addEventListener('submit', async (event) => {
    event.preventDefault()
 
    const prayerInput = form.querySelectorAll('input ,textarea')
 
    let submision = {}
 
    prayerInput.forEach(element => {
        const { value, name } = element
        if (value) {
            submision[name] = value
        }
    })
 
    // console.log(submision)
 
    const { error,data } = await supabase.from('newmembers').insert([submision], { returning: 'minimal' })
    console.log(error,data)
    // return onclick=submit();
    // error handling 
    if (error) {
        alert('check again and try later')
    } else {
        alert('ok done')    
        // return the html tags 
        // return 'M.toast({html: "I am a toast"})'
    }

    // if (error){
    //     // alert("lafada kiya hai bahi")
    //     $('#submit').on('click', function(e){
    //         // e.preventDefault();
    //         // Open popup modal
    //         $('#error').modal('open');
    //       });
    // }else{
    //     // Add click event listener to submit button
    //   $('#submit').on('click', function(e){
    //     // e.preventDefault();
    //     // Open popup modal
    //     $('#Success').modal('open');
    //   });
    // }
 
    // reset the full form 
    prayerInput.forEach(element => element.value = '')


    // Redirect to a new page
    window.location.href = "http://127.0.0.1:5500/pages/success.html";
})