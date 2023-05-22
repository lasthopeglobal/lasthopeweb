const { createClient } = supabase
 
// just add the keys 
supabase = createClient("https://noovhkobgulmzyahvsgi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vb3Zoa29iZ3VsbXp5YWh2c2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjAxMTcsImV4cCI6MTk5NDc5NjExN30.zehc-cUJVTWoYoUommxQNDyz7baJnrwjeSsLCy1r_rY")
 
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
})