
let { createClientSun } = supabase

// just add the keys 
// * church db in supabase
supabase = createClient("https://noovhkobgulmzyahvsgi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vb3Zoa29iZ3VsbXp5YWh2c2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjAxMTcsImV4cCI6MTk5NDc5NjExN30.zehc-cUJVTWoYoUommxQNDyz7baJnrwjeSsLCy1r_rY")

// * personal db in supabase
// supabase = createClient("https://uryjsoflpaycebbdoijr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWpzb2ZscGF5Y2ViYmRvaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MDM4ODAsImV4cCI6MTk5NDQ3OTg4MH0.7SMduIi9AHCtV_FE1JYwLmw4XpmL6c49RvapSfh2qPE")

let formSun = document.querySelector("#prayerreq_sunday")

formSun.addEventListener('submit', async (event) => {
    event.preventDefault()

    let prayerInput = formSun.querySelectorAll('input, textarea')

    let submision = {}

    prayerInput.forEach(element => {
        let { value, name } = element
        if (value) {
            submision[name] = value
        }
    })

    console.log(submision)

    let { error, data } = await supabase.from('prayerreq_sunday').insert([submision], { returning: 'minimal' })
    console.log(error, data)
    // return onclick=submit();
    // error handling 
    if (error) {
        alert('facing some issue in code')
    } else {
        alert('Your Prayer is Accepted')
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

    // reset the full formSun 
    prayerInput.forEach(element => element.value = '')


    //? Redirect to a new page
    let successPagePath = "/pages/success.html";

    window.location.href = successPagePath;

    //  just update link after fully live 
    // window.location.href = "http://127.0.0.1:5500/pages/success.html";




})